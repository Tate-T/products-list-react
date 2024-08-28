import "./App.css";
import fruits from "./data/products.json";
import FruitList from "./components/FruitsList/FruitsList";
import AddFruitModal from "./components/AddFruitModal/AddFruitModal";

function App() {
  return (
    <>
      <FruitList fruits={fruits} />
      <AddFruitModal />
    </>
  );
}

export default App;
