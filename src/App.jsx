import { styled } from "styled-components";
import StyleGlobal from "./Components/StyleGlobal";
import Header from "./Components/Header";
import TextField from "./Components/TextField";
import SideList from "./Components/SideList";

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
    
    </FundoGradiente>
  );
}

export default App;
