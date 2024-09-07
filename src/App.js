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
    fruits: [],
    bool: true,
    updateData: -1,
  };
  componentDidMount() {
    try {
      if (!JSON.parse(localStorage.getItem("products"))) {
        localStorage.setItem("products", JSON.stringify(this.state.fruits));
      } else {
        const products = this.setState({
          fruits: JSON.parse(localStorage.getItem("products")),
        });
        console.log(this.state.fruits);
      }
    } catch (err) {
      console.log(err);
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.fruits.length !== this.state.fruits.length) {
      localStorage.setItem("products", JSON.stringify(this.state.fruits));
      console.log(prevState.fruits, this.state.fruits);
    }

    //? В даному методі не можна писати this.setState() без перевірки,
    //? тому що виникне зациклення. А саме:
    //? setState() змінить стан, а зміна стану виклечене componentDidUpdate.
    //? Виклик componentDidUpdate знов ініціює setState() і так по колу
  }
  componentWillUnmount() {
    // localStorage.setItem("products", JSON.stringify(this.state.fruits));
  }
  saveData = (e) => {
    e.preventDefault();
    // const data = e.currentTarget.querySelectorAll("input");
    // console.log(data[0].value);
    const event = e.target;
    const fruitName = event.elements.fruitName.value;
    const fruitPrice = event.elements.fruitPrice.value;
    const fruitImage = event.elements.fruitPath.value;
    const fruitId = createUniqueId();
    // const currentProducts = JSON.parse(localStorage.getItem("products"));
    // currentProducts.push({
    //   price: fruitPrice,
    //   name: fruitName,
    //   id: fruitId,
    //   src: fruitImage,
    // });
    console.log(localStorage.getItem("products"));
    // this.setState({
    //   fruits: [
    //     ...this.state.fruits,
    //     { price: fruitPrice, name: fruitName, id: fruitId, src: fruitImage },
    //   ],
    // });
    this.setState((prevState) => {
      console.log(prevState);
      return {
        fruits: [
          ...prevState.fruits,
          { price: fruitPrice, name: fruitName, id: fruitId, src: fruitImage },
        ],
      };
    });
    console.log(this.state.fruits);
    this.closeModal();
    e.target.reset();
  };
  deleteCard = (e) => {
    const idToDelete = e.target.closest("li")["id"];
    // console.log(idToDelete, e.target);
    // const newFruits = this.state.fruits.filter((item) => {
    //   return item.id !== idToDelete;
    // });
    // this.setState({ fruits: newFruits });
    this.setState((prevState) => ({
      fruits: prevState.fruits.filter((fruit) => {
        console.log(typeof idToDelete, typeof fruit.id);
        const res = fruit.id.toString() !== idToDelete.toString();
        console.log(res);
        return res;
      })
    }));

    // localStorage.setItem("products", JSON.stringify(newFruits));
  };
  editCard = (e) => {
    this.openModal();
    this.setState({ bool: false });
    let targetId = e.target.closest("li")["id"];
    for (let i = 0; i < this.state.fruits.length; i++) {
      if (this.state.fruits[i].id === parseInt(targetId)) {
        this.setState({ updateData: { index: i, id: parseInt(targetId) } });
      }
    }

    setTimeout(() => {
      const fruitForm = document.querySelector("form");
      fruitForm.elements.fruitName.value = e.target
        .closest("li")
        .querySelector("h2").textContent;
      fruitForm.elements.fruitPrice.value = e.target
        .closest("li")
        .querySelector("p").textContent;
      fruitForm.elements.fruitPath.value = e.target
        .closest("li")
        .querySelector("img")["src"];
    }, 20);
  };
  editData = (e) => {
    e.preventDefault();
    const event = e.target;
    const fruitName = event.elements.fruitName.value;
    const fruitPrice = event.elements.fruitPrice.value;
    const fruitImage = event.elements.fruitPath.value;
    const tempArr = this.state.fruits;
    const elId = this.state.updateData.id;
    tempArr.splice(this.state.updateData.index, 1, {
      price: fruitPrice,
      name: fruitName,
      id: elId,
      src: fruitImage,
    });
    console.log(tempArr);
    console.log(this.state.updateData.id);
    this.setState({ fruits: [...tempArr] });
    this.closeModal();
    event.reset();
  };

  openModal = () =>
    this.setState({
      hide: true,
      bool: true,
    });

  closeModal = () =>
    this.setState({
      hide: false,
    });
  render() {
    return (
      <>
        {this.state.fruits.length > 0 && (
          <FruitList obj={this} fruits={this.state.fruits} />
        )}
        {this.state.fruits.length === 0 && <p>Empty basket</p>}
        <AddFruitModal obj={this} />
      </>
    );
  }
}

export default App;
