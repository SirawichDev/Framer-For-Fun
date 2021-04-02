import { FC, useState } from "react";
import Logos from "../../assets/images/Logo/Compact.svg";
import MobileMenu from "./mobile-menu";
import MobileNavBar from './mobile-nav';
import HeaderWrapper, {
  Logo,
  MenuWrapper,
  NavbarWrapper,
} from "./navbar.style";
import Menu from "./menu";
type NavbarProp = {
  className?: string;
};

const MenuItems: { label: string; url: string; className: string }[] = [
  {
    label: "Login",
    url: "/",
    className: "login-btn",
  },
  {
    label: "Sign Up",
    url: "/sign_up",
    className: "signup-btn",
  },
];

const Navbar: FC<NavbarProp> = ({ className, ...props }) => {

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const addAllClasses = ["header"];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <HeaderWrapper className={addAllClasses.join(" ")} {...props}>
      <NavbarWrapper>
        <MobileMenu items={MenuItems} logo={Logos} onClick={() => setIsNavOpen(true)}/>
        <MobileNavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
        <Logo>
          <img src={Logos} alt="logo" />
        </Logo>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
      </NavbarWrapper>
    </HeaderWrapper>
  );
};

export default Navbar;
