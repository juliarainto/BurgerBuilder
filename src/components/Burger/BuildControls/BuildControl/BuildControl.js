import React from 'react'
import * as containers from '../../styledBurger'
import styled, { css } from 'styled-components'

const BuildControlButtonLess = styled.button`
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

const BuildControl = (props) => {
  return (
    <containers.BuildControl>
      <containers.BuildControlLabel>{props.label}</containers.BuildControlLabel>
      <BuildControlButtonLess onClick={props.removed} disabled={props.disabled}>
        Less
      </BuildControlButtonLess>
      <containers.BuildControlButtonMore onClick={props.added}>
        More
      </containers.BuildControlButtonMore>
    </containers.BuildControl>
  )
}

export default BuildControl
