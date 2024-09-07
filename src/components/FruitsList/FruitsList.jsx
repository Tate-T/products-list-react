import React from "react";
import { List, ListImg, ListName, ListPrice } from "./fruitList.styled";

export default function FruitList({fruits, obj}) { 
    return (
      <>
        <List>
          {fruits.map(({ id, name, price, src }) => {
            return (
            <li
              key={id}
              id={id}
              style={{
                width: "150px",
              }}
            >
              <ListName>{name}</ListName>
              <ListPrice>{price}</ListPrice>
              <ListImg src={src} alt="image" />
              <button onClick={obj.editCard} type="button">Edit</button>
              <button onClick={obj.deleteCard} type="button">Delete</button>
            </li>
          )})}
        </List>
      </>
    );
  }

