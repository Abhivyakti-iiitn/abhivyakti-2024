import React, { useEffect, useState, useRef } from 'react';
import eventsObj from "../assets/EventContent.json";
import '../css/AllEvents.css';
import EventSlide from './EventSlide';
// import LogoComponent from './LogoComponent';
import StickyHeader from './StickyHeader';
import Footer from './Footer';


const MenuItems = [
  {
    name: "All Events",
    slug: "one"
  },
  {
    name: "Solo Events",
    slug: "two"
  },
  {
    name: "Team Events",
    slug: "three"
  },
];

const MenuItem = (props) => {
  const { item, selected = false, onItemSelect } = props;


  return (
    <div
      key={item.slug}
      className={`EventTypeBtns-item ${selected ? "EventTypeBtns-item--selected" : ""}`}
      data-slug={item.slug}
      onClick={() => {
        onItemSelect(item);
      }}
    >
      {item.name}
    </div>
  );
};

const Menu = (props) => {
  const { items, onSelectedItem, initialItemSlug = null } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItemsRef = useRef();
  const selectedItemRef =
    menuItemsRef.current && selectedItem
      ? menuItemsRef.current.querySelector(`[data-slug=${selectedItem.slug}]`)
      : null;

  const calculateDashPosition = (element, dashWidth) => {
    return element.offsetLeft + element.offsetWidth / 2 - dashWidth / 2;
  };

  const calculateDashWidth = (element) => {
    return element.offsetWidth;
  };

  const dashWidth = selectedItemRef ? calculateDashWidth(selectedItemRef) : 0;

  const dashPosition = selectedItemRef
    ? calculateDashPosition(selectedItemRef, dashWidth)
    : 0;

  const selectItem = (item) => {
    setSelectedItem(item);
    onSelectedItem(item);
  };

  let scrollVal = 0;
  const fx = (e) => {

    let curr = document.querySelector('.AllEvents').scrollTop;

    if (curr > scrollVal) {
      scrollVal = curr;
      if (document.querySelector('.AllEvents').scrollTop > 100) {

        document.querySelector('.pro_sticky_header').classList.add('hideBar')
      }
    } else {
      scrollVal = curr;
      document.querySelector('.pro_sticky_header').classList.remove('hideBar')
    }

  }
  const fx2 = (e) => {

    // let curr = document.querySelector('.AllEvents').getBoundingClientRect();
    // let x = e.clientX;
    let y = e.clientY;

    // console.log(document.querySelector('.pro_sticky_header').clientHeight)
    
    if(y <= document.querySelector('.pro_sticky_header').clientHeight && document.querySelector('.pro_sticky_header').classList.contains('hideBar'))
    {
      document.querySelector('.pro_sticky_header').classList.remove('hideBar');
    }

  }

  useEffect(() => {
    const initialItem = initialItemSlug
      ? items.find((item) => item.slug === initialItemSlug)
      : items[0];
    setSelectedItem(initialItem);
    document.querySelector('.AllEvents__heading').scrollIntoView(0);

    document.querySelector('.AllEvents').addEventListener("scroll", fx);
    document.querySelector('.AllEvents').addEventListener("mousemove", fx2);
  }, []);

  const renderItems = items.map((item, id) => (
    <MenuItem
      key={id}
      item={item}
      selected={selectedItem && selectedItem.slug === item.slug}
      onItemSelect={selectItem}
    />
  ));

  return (
    <div className="EventTypeBtns">
      <div className="EventTypeBtns-items" ref={menuItemsRef}>
        {renderItems}
        <div
          className="EventTypeBtns-underline"
          style={{
            width: dashWidth,
            transform: `translate3d(${dashPosition}px, 0 , 0)`
          }}
        />
      </div>
    </div>
  );
};

const AllEvents = () => {

  const [eventType, setEventType] = useState('');
  
  const eventsArray = Object.values(eventsObj);
  const filteredEvents = eventType === "Solo" ? eventsArray.filter(event => event.Team === "Solo") : eventsArray.filter(event => event.Team !== "Solo");
  const events = eventType ? filteredEvents : eventsArray;

  const handleClick = (slug) => {
    if (slug === "one") setEventType('');
    else if (slug === "two") setEventType('Solo');
    else if (slug === "three") setEventType('Team');
  }

  return (
    <>
      <div className='AllEvents'>
        <StickyHeader type={3} />
        <div className='AllEvents__heading'>
          <fieldset className='AllEventsFS'>
            <legend className='AllEventsL'>
              All Events
            </legend>
          </fieldset>
        </div>
        <div className='EventTypeControl'>
          <Menu
            items={MenuItems}
            onSelectedItem={(item) => {
              handleClick(item.slug);
            }}
          />
        </div>
        <div className='EventSlides'>
          {events.map((event) => (
            <div key={event.id}>
              <EventSlide key={event.id} event={event} />
            </div>
          ))}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AllEvents;