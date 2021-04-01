import { ReactNode, FC } from "react";
import { ThemeProvider } from "styled-components";
import ResetCss from "./refresh-css";
import { theme } from "../theme";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        {children}
      </>
    </ThemeProvider>
  );
};


export default Layout;