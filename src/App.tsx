import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background: #fff;
	display: flex;
	width: 100%
	height: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
function App() {
  return (
    <Container>
      <Title>Lets gogogo</Title>
    </Container>
  );
}

export default App;
