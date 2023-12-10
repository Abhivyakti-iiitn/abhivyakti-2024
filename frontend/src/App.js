import "./css/index.css";
import FirefliesAnimation from "./Components/FirefliesAnimation"
import EventCard from './Components/EventCard';
import HorizontalScrollingComponent from "./Components/HorizontalScrolling";

const events = [{name:'a', desc:"event a"},{ name:'b', desc: 'event b'},{ name:'c', desc: 'event c'},{ name:'d', desc:'event d'}, {name:'e f', desc:'event e f'}];

function animateEventCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('showCard');
      }
    });
  });

  const hiddenCards = document.querySelectorAll('.hiddenCard');
  hiddenCards.forEach((el) => observer.observe(el));
}

function App() {

  setTimeout(animateEventCards, 0);

  return (
    <div className="App">
      <FirefliesAnimation />
      <h1 className="Events__heading">Events</h1>
      <div className="EventCards">
        {
          events.map((event) =>
            <EventCard exploreAllEvents={false} imgSrc = {`./assets/${event.name.replace(" ", "-")}.jpg`} name={event.name.replace(" ", "-")} desc={event.desc} key={event.name.replace(" ", "-")} />
          )
        }
        <EventCard exploreAllEvents={true} />
      </div>
      <div className="AboutUs">
        <HorizontalScrollingComponent />
      </div>
    </div>
  );
}

export default App;

