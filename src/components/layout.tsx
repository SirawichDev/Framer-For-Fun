import { ReactNode, FC } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./footer/footer";
import Navbar from "./navbar";
import LayoutStyle from "./layout.style";
import ResetCss from "./refresh-css";
import { theme } from "../theme";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyle
        initial={{ opacity: 0, x: "100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ResetCss />
        <Navbar />
        <div className="children">{children}</div>
        <Footer>
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://github.com/SirawichDev"> SirawichDev </a>
        </Footer>
      </LayoutStyle>
    </ThemeProvider>
  );
};

export default Layout;
