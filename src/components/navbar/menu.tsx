import { FC } from "react";
import { MenuItemWrapper, MenuItem } from "./navbar.style";
type MenuProps = {
  items: MenuItemsProps[];
  className?: string;
};
type MenuItemsProps = {
  url: string;
  label: string;
  className: string;
  external?: boolean;
};

const Menu: FC<MenuProps> = ({ items, className, ...props }) => {
  const addAllClasses = ["menu"];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <MenuItemWrapper className={addAllClasses.join(" ")} {...props}>
      {items.map((item, index) => (
        <MenuItem key={index}>
          {
            <a className={item.className} href={item.url}>
              {item.label}
            </a>
          }
        </MenuItem>
      ))}
    </MenuItemWrapper>
  );
};
export default Menu;
