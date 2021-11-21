/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IoArrowDownOutline, IoArrowUpOutline } from 'react-icons/io5';
import PlansConfigContext from '../../../Context/PlansConfigContext';

const DeliveryDateOptionCard = function ({ formData }) {
  const { plansConfig, updatePlansConfig } = useContext(PlansConfigContext);
  const [expanded, setExpanded] = useState(true);
  return (
    <StyledDeliveryDateOptionCard>
      <div className="plan-option-header" onClick={() => setExpanded(!expanded)}>
        <h5>
          Data de Entrega:
          {' '}
          {Number.isNaN(Number(
            formData.signatureOptions
              .filter(
                (signatureOption) => signatureOption.planId === plansConfig.userPlan,
              )[0].deliveryDateOptions
              .filter(
                (option) => option.deliveryDateId === plansConfig.userDeliveryDateId,
              )[0]?.deliveryDateName,
          )) ? formData.signatureOptions
              .filter(
                (signatureOption) => signatureOption.planId === plansConfig.userPlan,
              )[0].deliveryDateOptions
              .filter(
                (option) => option.deliveryDateId === plansConfig.userDeliveryDateId,
              )[0]?.deliveryDateName
            : `Dia ${formData.signatureOptions
              .filter(
                (signatureOption) => signatureOption.planId === plansConfig.userPlan,
              )[0].deliveryDateOptions
              .filter(
                (option) => option.deliveryDateId === plansConfig.userDeliveryDateId,
              )[0]?.deliveryDateName}`}
        </h5>
        {expanded ? <IoArrowUpOutline size="18px" color="#4D65A8" /> : <IoArrowDownOutline size="18px" color="#4D65A8" />}
      </div>
      {
        expanded
          ? (
            <div className="choosen-area">
              {
          formData.signatureOptions
            .filter(
              (signatureOption) => signatureOption.planId === plansConfig.userPlan,
            )[0].deliveryDateOptions
            .map((deliveryDateOption) => (
              <label id={deliveryDateOption.deliveryDateId}>
                <input
                  type="radio"
                  name="deliveryDateConfigOptions"
                  value={deliveryDateOption.deliveryDateId}
                  id={deliveryDateOption.deliveryDateId}
                  checked={deliveryDateOption.deliveryDateId === plansConfig.userDeliveryDateId}
                  onChange={() => updatePlansConfig({ input: 'userDeliveryDateId', value: deliveryDateOption.deliveryDateId })}
                  className="form-check-input"
                />
                {Number.isNaN(Number(deliveryDateOption.deliveryDateName)) ? deliveryDateOption.deliveryDateName : `Dia ${deliveryDateOption.deliveryDateName}`}
              </label>
            ))
        }
            </div>
          ) : ''
      }
    </StyledDeliveryDateOptionCard>
  );
};

export default DeliveryDateOptionCard;

const StyledDeliveryDateOptionCard = styled.div`
  background-color: #ECE2F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  gap: 8px;

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
