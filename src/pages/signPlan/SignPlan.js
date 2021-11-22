import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';

const SignPlan = function () {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) navigate('/');
  }, []);

  return (
    <StyledSignPlan>
      <PageHeader
        title={`Bom te ver por aqui, ${userData?.userName}.`}
        subTitle="“Agradecer é arte de atrair coisas boas”"
      />
      <Outlet />
    </StyledSignPlan>
  );
};

export default SignPlan;

const StyledSignPlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 25px 0px 25px;
  justify-content: center;
  gap: 43px;

  .form-img{
    border-radius: 10px;
  }

`;
