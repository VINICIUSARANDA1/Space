import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$Active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) => (props.$Active ? "GandhiSansBold" : "GandhiSansRegular")};
  display: flex;
  align-items: center;
  gap: 22px;
`

export default function ItemNavigation({ children, IconActive, IconInactive, Active = false,})
 {
  return (
    <StyledListItem $Active={Active}>
      <img src={Active ? IconActive : IconInactive} alt="" />
      {children}
    </StyledListItem>
  );
}
