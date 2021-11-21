import React from 'react';
import styled from 'styled-components';
import Button from '../../../assets/style/Button';

const PlanCard = function ({ plan }) {
  const {
    plansDescription,
    plansImg,
  } = plan;

  return (
    <StyledPlandCard>
      <img className="plan-img" src={plansImg} alt="plan" />
      <div className="description-area">
        {plansDescription.split('.').map((description) => <h5>{`${description}`}</h5>)}
      </div>
      <div className="button-area">
        <Button>
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
  padding: 20px;
  gap: 20px;
  .plan-img{
    border-radius: 25px;
  }

`;
