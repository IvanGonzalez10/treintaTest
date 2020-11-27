import styled from "styled-components";

export const Div = styled.div`
  overflow: scroll;
  margin: 0 0 0 0;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  background-color: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  margin: 5px 0;
  padding: 5px 10px;
`;

export const H2 = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  padding: 2px 10px;
`;
