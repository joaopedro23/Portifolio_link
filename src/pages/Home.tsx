import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #777;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>João Pedro Tavares Ferreira</Title>
      <Subtitle>Desenvolvedor e Cientista de Dados</Subtitle>
      <Subtitle>Transformando dados em soluções práticas e inovadoras.</Subtitle>
    </Container>
  );
};

export default Home;
