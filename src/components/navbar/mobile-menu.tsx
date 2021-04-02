import React from "react";
import { MobileMenuWrapper, HamburgerIcon } from "./navbar.style";

type MobileMenuProps = {
  items: any;
  logo: string;
  onClick?: () => void;
};

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({
  items,
  logo,
  ...props
}) => {

  return (
    <MobileMenuWrapper {...props}>
      <HamburgerIcon>
        <span />
        <span />
        <span />
      </HamburgerIcon>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
