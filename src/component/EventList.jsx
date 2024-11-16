import style from "./EventList.module.css";

function EventList({ events, handleDelate }) {
  return (
    <div>
      {events.length === 0 && <h3>Not Content Yet :(</h3>}
      {events.map((event) => {
        return (
          <div className={style.card} key={event.id}>
            <h2>{event.title}</h2>
            <p>
              {event.location} - {event.date}
            </p>
            <button
              className={style["card-button"]}
              onClick={() => handleDelate(event.id)}
            >
              Delate
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
