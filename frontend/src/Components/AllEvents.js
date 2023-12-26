import React, { useEffect, useState, useRef } from 'react';
import eventsArray from "../assets/EventDetails.json";
import '../css/AllEvents.css';
import EventSlide from './EventSlide';

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
        className={`Allmenu-item ${selected ? "Allmenu-item--selected" : ""}`}
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
      <div className="Allmenu">
        <div className="Allmenu-items" ref={menuItemsRef}>
          {renderItems}
          <div
            className="Allmenu-dash"
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
    const [activeButton, setActiveButton] = useState('all'); 

    const filteredEvents = eventType === "Solo" ? eventsArray.filter(event => event.Team === "Solo") : eventsArray.filter(event => event.Team !== "Solo");
    const events = eventType ? filteredEvents : eventsArray;

    const handleClick  = (slug) => {
        if(slug==="one") setEventType('');
        else if(slug==="two") setEventType('Solo');
        else if(slug==="three") setEventType('Team');
    }

    return (
        <div className='AllEvents'>
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
                {/* <div
                    key='all'
                    className={`EventTypeBtn ${activeButton === 'all' ? 'active' : ''}`}
                    onClick={() => {
                        setEventType('');
                        setActiveButton('all');
                    }}
                >
                    All Events
                    <div className='AllEventsUnderline'></div>
                </div>
                <div
                    key='solo'
                    className={`EventTypeBtn ${activeButton === 'solo' ? 'active' : ''}`}
                    onClick={() => {
                        setEventType('Solo');
                        setActiveButton('solo');
                    }}
                >
                    Solo Events
                    <div className='AllEventsUnderline'></div>
                </div>
                <div
                    key='team'
                    className={`EventTypeBtn ${activeButton === 'team' ? 'active' : ''}`}
                    onClick={() => {
                        setEventType('Team');
                        setActiveButton('team');
                    }}
                >
                    Team Events
                    <div key={'underline'} className='AllEventsUnderline'></div>
                </div> */}
            </div>
            <div className='EventSlides'>
                {events.map((event) => (
                    <div key={event.id}>
                        <EventSlide event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllEvents;
