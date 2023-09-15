import { styled } from "styled-components";
import StyleGlobal from "./Components/StyleGlobal";

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
    </FundoGradiente>
  );
}

export default App;