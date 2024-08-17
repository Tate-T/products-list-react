import React, { Component } from "react";
import products from './products.json'
import { List, ListImg, ListName, ListPrice } from "./fruitList.styled";

export default class FruitList extends Component {
    state = {
        fruits: products,
    }
    render() {
        const { fruits } = this.state
        return (
            <>
                <List>
                    {fruits.map(({ id, name, price, src }) =>
                        <li key={id}>
                            <ListName>{name}</ListName>
                            <ListPrice>{price}</ListPrice>
                            <ListImg src={src} alt="image" />
                        </li>
                    )}
                </List>
            </>
        )
    }
}