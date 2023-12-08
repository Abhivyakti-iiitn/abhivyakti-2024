// import "./css/index.css";
import "./index.css";
import FirefliesAnimation from "./Components/FirefliesAnimation"
import EventCards from './Components/EventCards';
import { useNavigate } from "react-router-dom"

const events = [{name:'a', desc:"event a"},{ name:'b', desc: 'event b'},{ name:'c', desc: 'event c'},{ name:'d', desc:'event d'}, {name:'e f', desc:'event e f'}, {name:'Event', desc:'event Event'}];

function animate() {
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
  // const navigate = useNavigate();
  // function rerouteToEvent(id) {
  //   navigate(`/events/${id}`);
  // }

  setTimeout(animate, 0);

  return (
    <div className="App">
      <FirefliesAnimation />
      <h1 className="Events__heading">Events</h1>
      <div className="EventCards">
        {
          events.map((event) =>
            <EventCards imgSrc = {`./assets/${event.name.replace(" ", "-")}.jpg`} name={event.name.replace(" ", "-")} desc={event.desc} key={event.name.replace(" ", "-")} />
          )
        }
      </div>
    </div>
  );
}

export default App;

