import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import homeImage from '../../assets/images/image05.webp';
import Button from '../../assets/style/Button';

const Home = function () {
  return (
    <StyledHome>
      <div className="header-area">
        <PageHeader
          title="Bem vindo ao GratiBox"
        />
        <h6>
          Receba em casa um box com chás, produtos organicos, incensos e muito mais...
        </h6>
      </div>
      <div className="button-area">
        <img src={homeImage} alt="Home" />
        <Button>
          Quero Compeçar
        </Button>
        <Button type="secondary">
          Já sou grato
        </Button>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button-area{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
    flex-grow: 1;
    background-color: #4D65A8;
  }

  .header-area{
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 53px 18px 0px 18px;
  }
`;
