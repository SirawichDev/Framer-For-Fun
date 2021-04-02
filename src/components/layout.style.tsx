import styled from "styled-components";
import { motion } from "framer-motion";
import { themeGet } from "@styled-system/theme-get";

const LayoutStyle = styled(motion.div)`
  background-color: ${themeGet("colors.bgColor", "red")};
  margin: 3rem;
  border-radius: 10px;
  .children {
    padding: 50px;
  }
`;

export default LayoutStyle;
