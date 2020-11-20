import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import SBAForm from './components/SBAForm'

function App() {
  return (
    <SBAForm />
=======
import NotCalendar from './components/notCalendar/'
import BookingCalendar from './components/Calendar/calendar';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
        <Route path="/notcalendar">
          <NotCalendar />
        </Route>
        <Route path="/calendar">
          <BookingCalendar />
        </Route>
        <Route path="/form">
          <div>form</div>
        </Route>
      </Switch>
    </BrowserRouter>
>>>>>>> 04951a5a2f1ff685d606b21a9cb407af19b27f34
  );
}

export default App;
