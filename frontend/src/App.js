//App.js
import "./css/index.css";
// import FirefliesAnimation from "./Components/FirefliesAnimation"
// import EventCard from './Components/EventCard';
// import Header from "./Components/Header";
import Event from "./Components/EventPage/Event";
import MainPage from "./Components/MainPage";
import { Routes, Route } from 'react-router-dom'
import FormPage from "./Components/RegistrationForm/FormPage";
import LoginPage from "./Components/Auth/LoginPage";
import SignUpPage from "./Components/Auth/SignUpPage";
import Profile from "./Components/Profile";
import AllEvents from "./Components/AllEvents";
import TandC from "./Components/TandC";
import Teams from "./Components/Teams";


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
        <Route path="/event/:eventname" element={<Event />}></Route>
        <Route path="/form/:eventname" element={<FormPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/allevents" element={<AllEvents />}></Route>
        <Route path="/termsandconditions" element={<TandC />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes>
    </div>
  );
}

export default App;

