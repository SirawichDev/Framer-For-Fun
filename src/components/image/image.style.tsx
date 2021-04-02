import styled from "styled-components";
import { motion } from "framer-motion";

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  .rabbit {
    width: 22rem;
    border-radius: 10px;
    margin-bottom: 10px;
    object-fit: cover;
    box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.75);
    object-position: center center;
  }
`;

export default ImageWrapper;
