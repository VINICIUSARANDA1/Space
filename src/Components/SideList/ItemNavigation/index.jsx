import React from "react";
import styled from "styled-components";


const StyledListItem = styled.li`
    
`

export default function ItemNavigation({children, IconActive, IconInactive, Active=false}) {
  return <StyledListItem>
  <img src={ Active ? IconActive : IconInactive} alt="" />
  {children}
  
  </StyledListItem>
}
