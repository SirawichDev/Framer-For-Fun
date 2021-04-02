import G3 from "./assets/images/ga3.jpg";
import G4 from "./assets/images/ga4.jpg";

import Layout from "./components/layout";
import ImageWrapper from "./components/image/image.style";

function App() {
  return (
    <Layout>
      <ImageWrapper
        initial={{ opacity: 0, x: '-100px' }}
        animate={{ opacity: [1, 0, 1], x: 0 }}
        transition={{ times: [0, 0.2, 1], duration: 5 }}
      >
        <img src={G3} alt="G3" className="rabbit" />
        <img src={G4} alt="G4" className="rabbit" />
      </ImageWrapper>
    </Layout>
  );
}

export default App;
