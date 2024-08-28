import { Component } from "react";
import {
  AddFruitBackdrop,
  AddFruitBox,
  AddFruitCloseBtn,
  AddFruitForm,
  AddFruitInput,
  AddFruitButton,
} from "./AddFruit.styled";

class AddFruitModal extends Component {
  state = {
    hide: false,
  };

  openModal = () =>
    this.setState({
      hide: true,
    });

  closeModal = () =>
    this.setState({
      hide: false,
    });

  render() {
    const { hide } = this.state;
    return (
      <>
        <button type="button" onClick={this.openModal}>
          Add new fruit
        </button>
        {hide && (
          <AddFruitBackdrop>
            <AddFruitBox>
              <AddFruitCloseBtn type="button" onClick={this.closeModal}>
                Close
              </AddFruitCloseBtn>
              <AddFruitForm>
                <AddFruitInput
                  type="text"
                  name="addFruitInputValue"
                  placeholder="Fruit name"
                />
                <AddFruitButton type="submit">Add fruit</AddFruitButton>
              </AddFruitForm>
            </AddFruitBox>
          </AddFruitBackdrop>
        )}
      </>
    );
  }
}

export default AddFruitModal;
