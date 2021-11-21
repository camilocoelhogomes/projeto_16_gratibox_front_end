import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { availablePlansApi } from '../../api/gratiBoxApi';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';

const Plans = function () {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [availablePlans, setAvailablePlans] = useState();

  useEffect(() => {
    if (!userData) navigate('/');
    availablePlansApi().then((res) => setAvailablePlans(res.data));
  }, []);

  return (
    <StyledPlans>
      <PageHeader
        title={`Bom te ver por aqui, ${userData?.userName}.`}
        subTitle="Você ainda não assinou um plano, que tal começar agora?"
      />
      {
        availablePlans ? availablePlans.map((item) => item.plansName) : ''
      }
    </StyledPlans>
  );
};

export default Plans;

const StyledPlans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 25px 0px 25px;
  justify-content: center;
  gap: 43px;

`;
