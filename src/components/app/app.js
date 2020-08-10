import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>some Error</h1>;
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <PeoplePage />
      </div>
    );
  }
}
