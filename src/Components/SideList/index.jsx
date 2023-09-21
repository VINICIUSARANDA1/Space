import React from "react";
import styled from "styled-components";
import ItemNavigation from "./ItemNavigation";





const StylizedSideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default function SideList() {
  return (
    <aside>
      <nav>
        <StylizedSideList>
            <ItemNavigation
              IconActive="/icones/home-ativo.png"
              IconInactive="/icones/home-inativo.png"
              Active={true}
            > Inicio
            </ItemNavigation>

            <ItemNavigation
              IconActive="/icones/mais-vistas-ativo.png"
              IconInactive="/icones/mais-vistas-inativo.png"
            > Mais vistos
            </ItemNavigation>

            <ItemNavigation
              IconActive="/icones/mais-curtidas-ativo.png"
              IconInactive="/icones/mais-curtidas-inativo.png"
            > Mais Curtidas
            </ItemNavigation>

            <ItemNavigation
              IconActive="/icones/novas-ativo.png"
              IconInactive="/icones/novas-inativo.png"
            > Novas
            </ItemNavigation>

            <ItemNavigation
              IconActive="/icones/surpreenda-me-ativo.png"
              IconInactive="/icones/surpreenda-me-inativo.png"
            > Supreenda-me
            </ItemNavigation>
        </StylizedSideList>
      </nav>
    </aside>
  );
}
