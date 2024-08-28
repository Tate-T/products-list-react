import React, { Component } from "react";
import { List, ListImg, ListName, ListPrice } from "./fruitList.styled";

export default class FruitList extends Component {
  state = {
    fruits: this.props.fruits,
  };
  render() {
    const { fruits } = this.state;
    return (
      <>
        <List>
          {fruits.map(({ id, name, price, src }) => (
            <li
              key={id}
              style={{
                width: "150px",
              }}
            >
              <ListName>{name}</ListName>
              <ListPrice>{price}</ListPrice>
              <ListImg src={src} alt="image" />
            </li>
          ))}
        </List>
      </>
    );
  }
}
