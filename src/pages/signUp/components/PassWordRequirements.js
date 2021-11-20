import React from 'react';
import styled from 'styled-components';

const PassWordRequirements = function ({ password, passwordConfirm }) {
  return (
    <StyledPassWordRequidements>
      <p className="password-requirements-title">Requisitos da Senha:</p>
      <StyledPassWordRequidement fit={/(?=.{8,})/.test(password)}>
        Deve conter pelo menos 8 cadacteres
      </StyledPassWordRequidement>
      <StyledPassWordRequidement fit={/(?=.*[a-z])/.test(password)}>
        Deve conter letras minusculas
      </StyledPassWordRequidement>
      <StyledPassWordRequidement fit={/(?=.*[A-Z])/.test(password)}>
        Deve conter letras maiusculas
      </StyledPassWordRequidement>
      <StyledPassWordRequidement fit={/(?=.*[0-9])/.test(password)}>
        Deve conter números
      </StyledPassWordRequidement>
      <StyledPassWordRequidement fit={/(?=.*[^A-Za-z0-9])/.test(password)}>
        Deve conter caractores especiais
      </StyledPassWordRequidement>
      <StyledPassWordRequidement fit={passwordConfirm === password}>
        Campos de senha e Confirme a Senha devem ser iguais
      </StyledPassWordRequidement>
    </StyledPassWordRequidements>
  );
};

export default PassWordRequirements;

const StyledPassWordRequidements = styled.ul`
    background-color: #FFFFFF;
    padding: 8px 18px;
    border-radius: 10px;
    font-size: 12px;
    list-style-type: disc;
    list-style-position: inside;

    .password-requirements-title{
      font-family: 'primaryBold';
      color:#4D65A8;
      text-align: justify;
      font-size: 14px;
      line-height: 18px;
    }
`;
const StyledPassWordRequidement = styled.li`
    color: ${({ fit }) => (fit ? '#4D65A8' : '#604848aa')};
    font-family: ${({ fit }) => (fit ? 'primaryBold' : 'primaryLigth')};
`;
