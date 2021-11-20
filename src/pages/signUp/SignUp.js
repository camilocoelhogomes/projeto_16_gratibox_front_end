import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../assets/style/Button';
import Input from '../../assets/style/Input';
import PageHeader from '../../components/PageHeader';

const SignUp = function () {
  return (
    <StyledSignUp>
      <PageHeader
        title="Bem vindo ao GratiBox"
      />
      <div className="input-area">
        <Input
          placeholder="Nome"
        />
        <Input
          placeholder="E-mail"
        />
        <Input
          placeholder="Senha"
        />
        <Input
          placeholder="Confirme a Senha"
        />
      </div>
      <div className="button-area">
        <Button type="submit">
          Cadastrar
        </Button>
        <Link to="/sign-in">
          <Button backGround="secondary">
            Já sou grato
          </Button>
        </Link>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;

const StyledSignUp = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  justify-content: center;
  gap: 43px;

  .input-area{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .button-area{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
