import {
  AddFruitBackdrop,
  AddFruitBox,
  AddFruitCloseBtn,
  AddFruitForm,
  AddFruitInput,
  AddFruitButton,
} from "./AddFruit.styled";

function AddFruitModal({obj}) {
    const { hide } = obj.state;
    return (
      <>
        <button type="button" onClick={obj.openModal}>
          Add new fruit
        </button>
        {hide && (
          <AddFruitBackdrop>
            <AddFruitBox>
              <AddFruitCloseBtn type="button" onClick={obj.closeModal}>
                Close
              </AddFruitCloseBtn>
              <AddFruitForm onSubmit={() => {
                if (obj.bool) {
                  obj.saveData();
                }
                else {
                  obj.editData();
                }
              }}>
                <AddFruitInput
                  type="text"
                  name="fruitPrice"
                  placeholder="Fruit price"
                />
                <AddFruitInput
                  type="text"
                  name="fruitName"
                  placeholder="Fruit name"
                />
                <AddFruitInput
                  type="text"
                  name="fruitPath"
                  placeholder="Fruit image"
                />
                <AddFruitButton type="submit">Add fruit</AddFruitButton>
              </AddFruitForm>
            </AddFruitBox>
          </AddFruitBackdrop>
        )}
      </>
    );
}

export default AddFruitModal;
