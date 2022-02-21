import './App.css';
import {useState} from 'react'
import usersData from './data/user';

function App() {
  const [numberOfSlider, setNumberOfSlider] = useState(0);
  const users = usersData;


  function increaseSliderNumber() {
    if (numberOfSlider === users.length - 1) {
      setNumberOfSlider(0);
    }
    else {
      setNumberOfSlider(numberOfSlider + 1);
    }
  };

  function decreaseSliderNumber() {
    if (numberOfSlider === 0) {
      setNumberOfSlider(users.length - 1);
    }
    else {
      setNumberOfSlider(numberOfSlider - 1);
    }
  };

  return (
    <div className='body'>
      <div className="container">
          {/* slider section */}
        <div className="slider-container">
          <p className="arrow">
            <button onClick={decreaseSliderNumber}>&#8592;</button>
            <button onClick={increaseSliderNumber}>&#8594;</button>
          </p>
          {
            users.map((user, index) => <div
              key={user.name}
              className={`slider ${numberOfSlider === index && "show"}`}>
              <p>{user.name}</p>
              <p>Class: {user.class}</p>
              <p>No: {user.slider}</p>
              <p>All details will goes here</p>
            </div>)
          }
        </div>

        {/* user section */}
        <div className='user-container'>
          {
            users.map((user, index) => <p
              key={user.name}
              className={`user ${numberOfSlider === index && "highlight"}`}>
              {user.name.charAt(0)}
            </p>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
