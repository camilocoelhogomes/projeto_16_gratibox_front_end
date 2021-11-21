import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';
import { newSignatureFormApi } from '../../api/gratiBoxApi';
import signImage from '../../assets/images/image03.jpg';
import PlanOptionCard from './components/PlanOptionCard';
import DeliveryDateOptionCard from './components/DeliveryDateOptionCard';
import ProducOptionsCard from './components/ProducOptionsCard';

const SignPlan = function () {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [newSignatureForm, setNewSignatureForm] = useState();

  useEffect(() => {
    if (!userData) navigate('/');
    newSignatureFormApi()
      .then((res) => setNewSignatureForm(res.data));
  }, []);

  // eslint-disable-next-line max-len
  console.log();
  return (
    <StyledSignPlan>
      <PageHeader
        title={`Bom te ver por aqui, ${userData?.userName}.`}
        subTitle="“Agradecer é arte de atrair coisas boas”"
      />
      {
        newSignatureForm
          ? (
            <div className="form-area">
              <img className="form-img" src={signImage} alt="form" />
              <PlanOptionCard
                formData={newSignatureForm}
              />
              <DeliveryDateOptionCard
                formData={newSignatureForm}
              />
              <ProducOptionsCard
                formData={newSignatureForm}
              />
            </div>
          )
          : ''
      }
    </StyledSignPlan>
  );
};

export default SignPlan;

const StyledSignPlan = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 25px 0px 25px;
  justify-content: center;
  gap: 43px;
  
  .form-area{
    background-color: #ffffff;
    border-radius: 10px;
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-img{
    border-radius: 10px;
  }

`;
