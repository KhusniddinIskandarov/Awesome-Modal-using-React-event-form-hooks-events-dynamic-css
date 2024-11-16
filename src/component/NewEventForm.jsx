import { useState } from "react";
import "./NewEventForm.css";
import { v4 as uuidv4 } from "uuid";

function NewEventForm({ newEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Xorazm");

  const resetInputs = () => {
    setTitle("");
    setDate("");
    setLocation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: uuidv4(),
    };
    newEvent(event);
    resetInputs();
  };

  return (
    <div className="new-event-form">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Event Location:</span>
          <select
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            <option value="AQSH">Amerika</option>
            <option value="Xorazm">Xorazm</option>
            <option value="Toshkent">Toshkent</option>
          </select>
        </label>
        <button>Submit</button>
        <br />
        <br />
        <button onClick={resetInputs} type="button">
          Reset Inputs
        </button>
        <p>Title: {title}</p>
        <p>Date: {date}</p>
        <p>Loaction: {location}</p>
      </form>
    </div>
  );
}

export default NewEventForm;
