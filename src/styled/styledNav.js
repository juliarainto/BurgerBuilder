import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`

export const ToolbarNav = styled.nav`
  height: 100%;

  @media (max-width: 499px) {
    display: none;
  }
`

export const Logo = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`

export const LogoImg = styled.img`
  height: 100%;
`

export const MenuIcon = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`

export const MenuIconImg = styled.img`
  height: 100%;
`

export const NavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  flex-flow: column;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`

export const NavigationItem = styled.li`
  margin: 10px 0;
  width: 100%
  box-sizing: border-box;
  display: block;

  @media (min-width: 500px) {
    margin: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
`

export const NavigationItemA = styled(NavLink)`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  &.active {
    color: #40a4cb; 
  }   

  @media (min-width: 500px) {
    color: white;
    height: 100%;
    width: auto;
    padding: 15px 10px;
    border-bottom: 4px solid transparent;

    &.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4cb;
      color: white;
    }

    &:hover {
      background-color: #8f5c2c;
      border-bottom: 4px slid #40a4cb;
      color: white;
    }
  }
`

export const SideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }

  ${(props) =>
    props.show
      ? `
      transform: translateX(0);
      `
      : `
      transform: translateX(-100%);
    `}
`

export const Close = styled.div`
  transition: translateX(0);
`

export const Open = styled.div`
  transition: translateX(-100%);
`
