import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../assets/style/Button';
import PlansConfigContext from '../../../Context/PlansConfigContext';

const PlanCard = function ({ plan }) {
  const {
    plansDescription,
    plansImg,
    plansId,
  } = plan;
  const { updatePlansConfig } = useContext(PlansConfigContext);
  const navigate = useNavigate();
  const signPlan = () => {
    updatePlansConfig({ input: 'userPlan', value: plansId });
    navigate('/sign-plan');
  };

  return (
    <StyledPlandCard>
      <img className="plan-img" src={plansImg} alt="plan" />
      <div className="description-area">
        {plansDescription.split('.').map((description) => <h5>{`${description}`}</h5>)}
      </div>
      <div className="button-area">
        <Button onClick={signPlan}>
          Assinar
        </Button>
      </div>
    </StyledPlandCard>
  );
};

export default PlanCard;

const StyledPlandCard = styled.div`
  width: 100%;
  background-color: #E5CDB3;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 20px 20px;
  gap: 20px;
  .plan-img{
    border-radius: 25px;
  }

`;
