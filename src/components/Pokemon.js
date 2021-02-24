import React from "react";
import "../stylesheets/Pokemon.scss";

class Pokemon extends React.Component {
  render() {
    console.log(this.props.card);
    const type = this.props.card.types.map((item) => {
      return <li className="section__ul--li"> {item}</li>;
    });
    return (
      <div className="container">
        <section className="section">
          <img
            src={this.props.card.url}
            alt="pokemon image"
            className="section__pokeimg"
          />
          <h3 className="section__title">{this.props.card.name} </h3>
          <ul className="section__ul">{type}</ul>
        </section>
      </div>
    );
  }
}
export default Pokemon;
