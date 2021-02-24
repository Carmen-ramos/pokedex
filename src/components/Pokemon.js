import React from "react";

class Pokemon extends React.Component {
  render() {
    console.log(this.props.card);
    return (
      <div className="section">
        <section>
          <img src={this.props.card.url} alt="pokemon image" />
          <h3>{this.props.card.name} </h3>
        </section>
      </div>
    );
  }
}
export default Pokemon;
