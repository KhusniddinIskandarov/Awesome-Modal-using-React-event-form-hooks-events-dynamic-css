import "./Title.css";

function Title({ title, subtitle }) {
  return (
    <div className="title-block">
      <h2 className="title">{title}</h2>
      <br />
      <p className="subtitle">{subtitle}</p>
      <p>
        <i>Lorem ipsum</i> <b>dolor</b> sit amet consectetur adipisicing elit.
        <b>Fugit</b>, tempora vel consequuntur sint sapiente optio delectus,
        ipsam facere cum <sup>minus</sup> quae tempore <sub>ex</sub> aspernatur
        nulla reiciendis doloribus odio <del>officiis dicta dolores</del>
        explicabo atque libero eos? Corporis quaerat, nesciunt exercitationem
        neque, ex repudiandae
        <b>
          <i>similique facere labore minima earum</i>
        </b>{" "}
        nam enim laborum?
      </p>
    </div>
  );
}

export default Title;
