import React, { Component } from "react";
import SwapiService from "../../service/Api";

import "./item-list.css";

import Spinner from "../spinner";

export default class ItemList extends Component {
  SwapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.SwapiService.getAllPeople().then(peopleList => {
      this.setState({
        peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
