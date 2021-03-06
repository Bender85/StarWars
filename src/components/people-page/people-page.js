import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    if (this.state.hasError) {
      return <h1>some error zdadz</h1>;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
