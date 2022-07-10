import styled from "styled-components";

export const CollapseWrapper = styled.div`
  width: 100%;
  padding: 8px 10px;
  border-bottom: 1px solid rgba(28, 28, 28, 0.25);
`;

export const CollapseTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
  div.toggle-icon {
    width: 20px;
    height: 10px;
    transform: rotate(${({ active }) => (active ? "180deg" : "0deg")});
    transition-duration: 0.5s;
  }
`;

export const CollapseDescription = styled.div`
  overflow: hidden;
  height: ${({ active, height }) => (active ? height : 0)}px;
  transition-duration: 1s;
  ul {
    list-style-position: inside;
  }
  div.text {
    padding-top: 10px;
  }
`;
