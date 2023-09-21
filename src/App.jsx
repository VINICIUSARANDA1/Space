import { styled } from "styled-components";
import StyleGlobal from "./Components/StyleGlobal";
import Header from "./Components/Header";
import SideList from "./Components/SideList";
import Banner from "./Components/Banner";

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

function App() {
  return (
    <FundoGradiente>
      <StyleGlobal />
      <Header/>  
      <SideList/>
      <Banner 
      text={"A galeria mais completa de fotos do espaço!"}
      />
   
    
    </FundoGradiente>
  );
}

export default App;
