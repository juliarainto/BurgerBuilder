import styled from 'styled-components'

export const CheckoutSummaryContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`

export const ContactDataForm = styled.div`
  text-align: center;
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`

export const ContactDataInput = styled.input`
  display: block
`

export const OrderContainer = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

export const OrderSpan = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin: 0 8px;
  padding: 5px;
  border: 1px solid #ccc;
`