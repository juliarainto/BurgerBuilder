import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }

  ${(props) =>
    props.show
      ? `
      transform: translateY(0);
      opacity: 1;
      `
      : `
      transform: translateY(-100vh);
      opacity: 0;
    `}
`

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonSuccess = styled.div`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: #5c9210;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`

export const ButtonDanger = styled.div`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: #944317;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`
