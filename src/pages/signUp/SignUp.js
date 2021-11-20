import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import signUpApi from '../../api/gratiBoxApi';
import Button from '../../assets/style/Button';
import Input from '../../assets/style/Input';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';

const SignUp = function () {
  const { userSign, updateUserSign } = useContext(UserContext);
  const navigate = useNavigate();
  const submitSignUp = (e) => {
    e.preventDefault();
    signUpApi(userSign).then(() => navigate('/sign-in'));
  };

  return (
    <StyledSignUp onSubmit={submitSignUp}>
      <PageHeader
        title="Bem vindo ao GratiBox"
      />
      <div className="input-area">
        <Input
          placeholder="Nome"
          value={(userSign?.userName || '')}
          onChange={(e) => updateUserSign({ input: 'userName', value: e.target.value })}
          required
        />
        <Input
          placeholder="E-mail"
          value={(userSign?.userEmail || '')}
          onChange={(e) => updateUserSign({ input: 'userEmail', value: e.target.value })}
          type="email"
          required
        />
        <Input
          placeholder="Senha"
          value={(userSign?.userPassword || '')}
          onChange={(e) => updateUserSign({ input: 'userPassword', value: e.target.value })}
          type="password"
          required
        />
        <Input
          placeholder="Confirme a Senha"
          value={(userSign?.userConfirmPassword || '')}
          onChange={(e) => updateUserSign({ input: 'userConfirmPassword', value: e.target.value })}
          type="password"
          required
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
