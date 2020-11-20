import logo from './logo.svg';
import './App.css';
import NotCalendar from './components/notCalendar/';
import BookingCalendar from './components/Calendar/calendar';
import Tiles from './components/Tiles';

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
        <Route path="/tiles">
          <Tiles />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
