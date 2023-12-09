import "../css/index.css";
import FirefliesAnimation from "./FirefliesAnimation"
import EventCard from './EventCard';
import Header from "./Header";
import Event from "./EventPage/Event";

const events = [{ name: 'a', desc: "event a" }, { name: 'b', desc: 'event b' }, { name: 'c', desc: 'event c' }, { name: 'd', desc: 'event d' }, { name: 'e f', desc: 'event e f' }];

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

function MainPage() {

    setTimeout(animateEventCards, 0);

    return (
        <div className="App">
            {/* <FirefliesAnimation /> */}
            <Header />
            <h1 className="Events__heading">Events</h1>
            <div className="EventCards">
                {
                    events.map((event) =>
                        <EventCard exploreAllEvents={false} imgSrc={`./assets/${event.name.replace(" ", "-")}.jpg`} name={event.name.replace(" ", "-")} desc={event.desc} key={event.name.replace(" ", "-")} />
                    )
                }
                <EventCard exploreAllEvents={true} />
            </div>
        </div>
    );
}

export default MainPage;

