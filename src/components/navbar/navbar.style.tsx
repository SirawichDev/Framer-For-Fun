import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { motion } from "framer-motion";

const HeaderWrapper = styled.header`
  position: relative;
  z-index: 99999;
  transition: 0.25s ease-in-out;
`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 75px;
  background-color: transparent;
  transition: 0.25s ease-in-out;
  @media (max-width: 1400px) {
    padding: 40px 45px;
  }
  @media (max-width: 990px) {
    padding: 15px 25px;
  }
  @media (max-width: 575px) {
    padding: 3px 15px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const MenuItem = styled.div`
  margin: 0 20px;
  list-style: none;
  a {
    padding: 5px 10px;
  }
  .signup-btn {
    background-color: black;
    color: white;
    width: 200px;
    font-weight: bold;
    padding: 10px 25px;
    border-radius: 20px;
    text-decoration: none;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  }
  .login-btn {
    color: black;
    font-weight: bold;
    padding: 10px 10px;
    text-decoration: none;
  }
`;
export const MobileMenuWrapper = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    background-color: ${themeGet("colors.textColor", "#292929")};
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;
export const Logo = styled.div`
  margin-right: 10px;
  flex-shrink: 0;
  img {
    width: 55px;
  }
  @media (max-width: 990px) {
    display: none;
  }
  @media (max-width: 575px) {
    max-width: 90px;
  }
`;

export const MobileNav = styled(motion.nav)`
  @media (min-width: 990px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${themeGet("colors.primary", "red")};
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0;
    font-size: 2rem;

    a {
      color: black;
    }
  }
  .close {
    position: absolute;

    font-size: 2rem;
    left: 90%;
    cursor: pointer;
    z-index:99;
    display: flex;
    justify-content: flex-end;
  }
`;
export default HeaderWrapper;
