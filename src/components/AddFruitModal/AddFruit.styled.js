import styled from "styled-components";

const AddFruitBackdrop = styled.div`
  overflow: hidden;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #0000003e;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
`;

const AddFruitBox = styled.div`
  width: 250px;
  /* height: 150px; */
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 15px;
  overflow: hidden;
`;

const AddFruitCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const AddFruitForm = styled.form`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  padding: 40px;
`;

const AddFruitInput = styled.input`
  width: 150px;
`;

const AddFruitButton = styled.button`
  display: block;
  width: 100px;
  margin-top: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`;

export {
  AddFruitBackdrop,
  AddFruitBox,
  AddFruitCloseBtn,
  AddFruitForm,
  AddFruitInput,
  AddFruitButton,
};
