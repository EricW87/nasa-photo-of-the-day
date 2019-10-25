import React, {useState} from "react";
import "./App.css";
import Pictures from "./components/Pictures";
import Links from "./components/Links";

function App() {
  const todaysDate = new Date();
  const millisecsPerDay = 86400000;
  const [date, setDateTo] = useState(todaysDate);

  function dateHandler(offset)
  {
    console.log(date.getDate());
    let newDate = new Date(date.getTime() + offset * millisecsPerDay);
    if(todaysDate < newDate)
      return;

    setDateTo(newDate);
    console.log(date);
  };

  return (
    <div className="App">
      <p>
        Nasa Picture of the Day.
      </p>
      <Pictures date={date}/>
      <Links dateHandler={dateHandler}
      />
    </div>
  );
}

export default App;
