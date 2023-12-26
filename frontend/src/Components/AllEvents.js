import React, { useEffect, useState, useRef } from 'react';
import eventsArray from "../assets/EventDetails.json";
import '../css/AllEvents.css';
import EventSlide from './EventSlide';
import LogoComponent from './LogoComponent';
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

  useEffect(() => {
    const initialItem = initialItemSlug
      ? items.find((item) => item.slug === initialItemSlug)
      : items[0];
    setSelectedItem(initialItem);
  }, []);

  const renderItems = items.map((item) => (
    <MenuItem
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

  const filteredEvents = eventType === "Solo" ? eventsArray.filter(event => event.Team === "Solo") : eventsArray.filter(event => event.Team !== "Solo");
  const events = eventType ? filteredEvents : eventsArray;

  const handleClick = (slug) => {
    if (slug === "one") setEventType('');
    else if (slug === "two") setEventType('Solo');
    else if (slug === "three") setEventType('Team');
  }

  return (
    <>
      <StickyHeader type="2" />
      <div className='AllEvents'>
        <div className='AllEvents__heading'>
          <fieldset className='AllEventsFS'>
            <legend className='AllEventsL'>
              All Events
            </legend>
          </fieldset>
        </div>
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
            <EventSlide event={event} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AllEvents;
