import styled, { css } from 'styled-components'

export const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow-y: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  max-width: 500px;

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`

export const BuildControlLabel = styled.label`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`

export const BuildControls = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

export const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`

export const BuildControlButtonLess = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  outline: none;

  &:active {
    background-color: #daa972;
    color: white;
  }

  ${(props) =>
    props.disabled
      ? css`
          background-color: #ac9980;
          border: 1px solid #7e7365;
          color: #ccc;
          cursor: default;
          &:hover {
            background-color: #ac9980;
            cursor: not-allowed;
          }
        `
      : css`
          border: 1px solid #aa6817;
          cursor: pointer;
          background-color: #d39952;
          color: white;
          &:hover {
            background-color: #daa972;
            color: white;
          }
        `};
`

export const BuildControlButtonMore = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  outline: none;

  &:active {
    background-color: #99703f;
  }

  ${(props) =>
    props.disabled
      ? css`
          background-color: #ac9980;
          border: 1px solid #7e7365;
          color: #ccc;
          cursor: default;
          &:hover {
            background-color: #ac9980;
            color: #ccc;
            cursor: not-allowed;
          }
        `
      : css`
          border: 1px solid #aa6817;
          cursor: pointer;
          background-color: #8f5e1e;
          color: white;
          &:hover {
            background-color: #99703f;
          }
        `};
`

export const BuildControlOrderButton = styled.button`
  outline: none;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  margin: 20px 0 10px 0;

  ${(props) =>
    props.disabled
      ? css`
          background-color: #c7c6c6;
          cursor: not-allowed;
          border: 1px solid #ccc;
          color: #888888;
        `
      : css`
          border: 1px solid #966909;
          cursor: pointer;
          background-color: #dad735;
          color: #966909;
          animation: enable 0.3s linear;
          &:hover {
            background-color: #a0db41;
            border: 1px solid #966909;
            color: #966909;
          }
        `};

  @keyframes enable {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`

export const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`
export const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`
export const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;

  &::befoer {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`
export const Patty = styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`

export const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`

export const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`

export const Tomato = styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`
