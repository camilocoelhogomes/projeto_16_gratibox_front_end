/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IoArrowDownOutline, IoArrowUpOutline } from 'react-icons/io5';
import PlansConfigContext from '../../../Context/PlansConfigContext';

const PlanOptionCard = function ({ formData }) {
  const { plansConfig, updatePlansConfig } = useContext(PlansConfigContext);
  const [expaded, setExpanded] = useState(true);

  return (
    <StyledPlanOptionCard>
      <div className="plan-option-header" onClick={() => setExpanded(!expaded)}>
        <h5>
          Plano:
          {' '}
          {
            formData.signatureOptions
              .filter(
                (signatureOption) => signatureOption.planId === plansConfig.userPlan,
              )[0].planName
          }
        </h5>
        {expaded ? <IoArrowUpOutline size="18px" color="#4D65A8" /> : <IoArrowDownOutline size="18px" color="#4D65A8" />}
      </div>
      {
        expaded
          ? (
            <div className="choosen-area">
              {
          formData.signatureOptions
            .map((signatureOption) => (
              <label id={signatureOption.planId}>
                <input
                  type="radio"
                  name="plansConfigOptions"
                  value={signatureOption.planId}
                  id={signatureOption.planId}
                  checked={signatureOption.planId === plansConfig.userPlan}
                  onChange={() => updatePlansConfig({ input: 'userPlan', value: signatureOption.planId })}
                  className="form-check-input"
                />
                {signatureOption.planName}
              </label>
            ))
        }
            </div>
          ) : ''
      }
    </StyledPlanOptionCard>
  );
};

export default PlanOptionCard;

const StyledPlanOptionCard = styled.div`
  background-color: #ECE2F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  gap: 8px;
  width:100%;
  .plan-option-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .choosen-area{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
