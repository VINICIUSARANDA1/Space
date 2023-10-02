import { styled } from "styled-components";
import StyleGlobal from "./Components/StyleGlobal";
import Header from "./Components/Header";
import SideList from "./Components/SideList";
import Banner from "./Components/Banner";
import backgroundImage from "./assets/banner.png";
import Gallery from "./Components/Gallery";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100%;
  height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;

` 
const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
`
function App() {
  return (
    <FundoGradiente>
      <StyleGlobal />
      <AppContainer>
        <Header />
        <MainContainer>
        <SideList />
        <GalleryContent>
        <Banner
          text={"A galeria mais completa de fotos do espaço!"}
          backgroundImage={backgroundImage}
        />
        <Gallery/>
        </GalleryContent>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
