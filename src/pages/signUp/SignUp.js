import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import signUpApi from '../../api/gratiBoxApi';
import Button from '../../assets/style/Button';
import Input from '../../assets/style/Input';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';
import PassWordRequirements from './components/PassWordRequirements';

const SignUp = function () {
  const { userSign, updateUserSign } = useContext(UserContext);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const submitSignUp = (e) => {
    e.preventDefault();
    if (!/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}).*$/.test(userSign.userPassword)) {
      return;
    }
    signUpApi(userSign)
      .then(() => navigate('/sign-in'))
      .catch((error) => {
        if (error.response.status === 409) {
          setEmailError(true);
        }
      });
  };

  return (
    <StyledSignUp onSubmit={submitSignUp}>
      <PageHeader
        title="Bem vindo ao GratiBox"
      />
      <div className="input-area">
        <div className="error-area">
          <Input
            placeholder="Nome"
            value={(userSign?.userName || '')}
            onChange={(e) => updateUserSign({ input: 'userName', value: e.target.value })}
            required
          />
          <div className="error-alert">
            <p />
          </div>
        </div>
        <div className="error-area">
          <Input
            placeholder="E-mail"
            value={(userSign?.userEmail || '')}
            onChange={(e) => { setEmailError(false); updateUserSign({ input: 'userEmail', value: e.target.value }); }}
            type="email"
            required
          />
          <div className="error-alert">
            <p>{emailError ? 'Email já cadastrado' : ''}</p>
          </div>
        </div>
        <div className="error-area">
          <Input
            placeholder="Senha"
            value={(userSign?.userPassword || '')}
            onChange={(e) => updateUserSign({ input: 'userPassword', value: e.target.value })}
            required
            type="password"
          />
          <div className="error-alert">
            <p />
          </div>
        </div>
        <div className="error-area">
          <Input
            placeholder="Confirme a Senha"
            value={(userSign?.userConfirmPassword || '')}
            onChange={(e) => updateUserSign({ input: 'userConfirmPassword', value: e.target.value })}
            required
            type="password"
          />
          <div className="error-alert">
            <p />
          </div>
          <PassWordRequirements
            password={userSign?.userPassword}
            passwordConfirm={userSign?.userConfirmPassword}
          />
        </div>
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
   .error-area{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .error-alert{
    height: 12px;
    padding: 0 18px;
    p{
    color: #ffffff;
    font-family: 'primaryBold';
    font-size: 12px;
    line-height: 18px;
    }
  }
`;
