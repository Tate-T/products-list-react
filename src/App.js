import "./App.css";
import fruitsList from "./data/products.json";
import FruitList from "./components/FruitsList/FruitsList";
import AddFruitModal from "./components/AddFruitModal/AddFruitModal";
import { Component } from "react";

const safeArr = [];
function createUniqueId() {
  const id = "id" + Math.random().toString(16).slice(2);
  if (safeArr.includes(id)) {
    createUniqueId();
  } else {
    safeArr.push(id);
    return id;
  }
}

class App extends Component {
  state = {
    hide: false,
    fruits: fruitsList,
    bool: true
  };
  
  saveData = (e) => {
    e.preventDefault();
    // const data = e.currentTarget.querySelectorAll("input");
    // console.log(data[0].value);
    const event = e.target;
    const fruitName = event.elements.fruitName.value;
    const fruitPrice = event.elements.fruitPrice.value;
    const fruitImage = event.elements.fruitPath.value;

    this.setState({ fruits: [...this.state.fruits, { price: fruitPrice, name: fruitName, id: createUniqueId(), src: fruitImage }] });
    this.closeModal();
    e.target.reset();
  };
  deleteCard = (e) => {
    const idToDelete = parseInt(e.target.closest("li")["id"]);
    const newFruits = this.state.fruits.filter(item => {
      return item.id !== idToDelete;
    })
    this.setState({ fruits: newFruits });
  }
  editCard = (e) => {
    this.openModal();
    
    setTimeout(() => {
      const fruitForm = document.querySelector("form");
      fruitForm.elements.fruitName.value = e.target.closest("li").querySelector("h2").textContent;
      fruitForm.elements.fruitPrice.value = e.target.closest("li").querySelector("p").textContent;
      fruitForm.elements.fruitPath.value = e.target.closest("li").querySelector("img")["src"];

    }, 20);
   
  }
  openModal = () => 
    this.setState({
      hide: true, bool: true
    });

  closeModal = () =>
    this.setState({
      hide: false,
    });
  render() {
    return (
      <>
        <FruitList obj={this} fruits={this.state.fruits} />
        <AddFruitModal obj={this} />
      </>
    );
  }
}

export default App;
