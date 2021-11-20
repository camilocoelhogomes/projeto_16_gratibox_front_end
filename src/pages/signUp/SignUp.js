import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../assets/style/Button';
import Input from '../../assets/style/Input';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';

const SignUp = function () {
  const { userSign, updateUserSign } = useContext(UserContext);

  return (
    <StyledSignUp>
      <PageHeader
        title="Bem vindo ao GratiBox"
      />
      <div className="input-area">
        <Input
          placeholder="Nome"
          value={(userSign?.name || '')}
          onChange={(e) => updateUserSign({ input: 'name', value: e.target.value })}
        />
        <Input
          placeholder="E-mail"
          value={(userSign?.email || '')}
          onChange={(e) => updateUserSign({ input: 'email', value: e.target.value })}
        />
        <Input
          placeholder="Senha"
          value={(userSign?.password || '')}
          onChange={(e) => updateUserSign({ input: 'password', value: e.target.value })}
        />
        <Input
          placeholder="Confirme a Senha"
          value={(userSign?.confirmPassword || '')}
          onChange={(e) => updateUserSign({ input: 'confirmPassword', value: e.target.value })}
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
