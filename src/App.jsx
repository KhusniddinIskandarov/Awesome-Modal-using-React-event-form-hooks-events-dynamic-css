// style
import "./App.css";

// react hooks
import { useState } from "react";

// components
import Title from "./component/Title";
import Modal from "./component/Modal";
import EventList from "./component/EventList";
import NewEventForm from "./component/NewEventForm";

function App() {
  const [name, setName] = useState("Husniddin");
  const [events, setEvents] = useState([
    { title: "khusniddin's birthday party", id: 1 },
    { title: "sharofiddin's live stream", id: 2 },
    { title: "match: manchester united vs real-madrid", id: 3 },
  ]);
  const [showContent, setShowContent] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const handleClick = () => {
    setName("Sharofiddin");
  };

  const handleDelate = (id) => {
    setEvents((events) => {
      return events.filter((event) => {
        return event.id !== id;
      });
    });
  };

  let subtitle = "Welcome To My Web Sayt !";

  // closeModal
  const closeModal = () => {
    setShowModal(false);
  };

  // newEvent
  const newEvent = (event) => {
    setEvents((events) => {
      return [...events, event];
    });
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title title="Hello world!" subtitle={subtitle} />
      <br />
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      <br />
      <br />
      <hr />
      <br />
      {showContent && (
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      )}
      {!showContent && (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
      <br />
      <br />
      {showContent && <EventList events={events} handleDelate={handleDelate} />}
      {showModal && (
        <Modal closeModal={closeModal} isModal={true}>
          <NewEventForm newEvent={newEvent} />
          {/* <h2>Modal page!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, et
            magni voluptatem quia vitae voluptatum vel libero voluptate dolores
            minus quasi, perferendis suscipit saepe, tempore est aliquid quidem
            doloribus officiis.
          </p>
          <a href="#">Subtitle</a> */}
        </Modal>
      )}
      <hr />
      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
