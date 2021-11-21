/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IoArrowDownOutline, IoArrowUpOutline } from 'react-icons/io5';
import PlansConfigContext from '../../../Context/PlansConfigContext';

const ProducOptionsCard = function ({ formData }) {
  const { plansConfig, setPlansConfig } = useContext(PlansConfigContext);
  const [expaded, setExpanded] = useState(true);
  const updatePlansConfig = ({ value }) => {
    const newPlansConfig = { ...plansConfig };
    if (!plansConfig.productOption) {
      newPlansConfig.productOption = [value];
    } else if (plansConfig.productOption?.some((option) => option === value)) {
      newPlansConfig.productOption = newPlansConfig.productOption
        .filter((option) => option !== value);
    } else {
      newPlansConfig.productOption.push(value);
    }
    setPlansConfig(newPlansConfig);
  };
  return (
    <StyledProducOptionsCard>
      <div className="plan-option-header" onClick={() => setExpanded(!expaded)}>
        <h5>
          Quero Receber:
        </h5>
        {expaded ? <IoArrowUpOutline size="18px" color="#4D65A8" /> : <IoArrowDownOutline size="18px" color="#4D65A8" />}
      </div>
      {
        expaded
          ? (
            <div className="choosen-area">
              {
          formData.productOptions
            .map((productOption) => (
              <label id={productOption.id}>
                <input
                  type="checkbox"
                  name="plansConfigOptions"
                  value={productOption.id}
                  id={productOption.id}
                  checked={plansConfig.productOption?.some((option) => option === productOption.id)}
                  onChange={() => updatePlansConfig({ value: productOption.id })}
                  className="form-check-input"
                />
                {productOption.name}
              </label>
            ))
        }
            </div>
          ) : ''
      }
    </StyledProducOptionsCard>
  );
};

export default ProducOptionsCard;

const StyledProducOptionsCard = styled.div`
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
    justify-content: space-between;
    padding-right: 20px;
    flex-wrap: wrap;
  }
`;
