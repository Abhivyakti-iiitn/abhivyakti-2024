  //App.js
  import "./css/index.css";
  // import FirefliesAnimation from "./Components/FirefliesAnimation"
  // import EventCard from './Components/EventCard';
  // import Header from "./Components/Header";
  import Event from "./Components/EventPage/Event";
  import MainPage from "./Components/MainPage";
  import { Routes, Route } from 'react-router-dom'


  // const events = [{ name: 'a', desc: "event a" }, { name: 'b', desc: 'event b' }, { name: 'c', desc: 'event c' }, { name: 'd', desc: 'event d' }, { name: 'e f', desc: 'event e f' }];

  // function animateEventCards() {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('showCard');
  //       }
  //     });
  //   });

  //   const hiddenCards = document.querySelectorAll('.hiddenCard');
  //   hiddenCards.forEach((el) => observer.observe(el));
  // }

  function App() {

    // setTimeout(animateEventCards, 0);

    return (
      <div className="PApp">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/event" element={<Event />}></Route>
        </Routes>
      </div>
    );
  }

  export default App;

