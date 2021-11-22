import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { newSignatureFormApi } from '../../../api/gratiBoxApi';
import PlanOptionCard from './PlanOptionCard';
import DeliveryDateOptionCard from './DeliveryDateOptionCard';
import ProducOptionsCard from './ProducOptionsCard';
import signImage from '../../../assets/images/image03.jpg';
import Button from '../../../assets/style/Button';
import PlansConfigContext from '../../../Context/PlansConfigContext';

const NewSignatureForm = function () {
  const [newSignatureForm, setNewSignatureForm] = useState();
  const { plansConfig, updatePlansConfig } = useContext(PlansConfigContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    newSignatureFormApi().then((res) => setNewSignatureForm(res.data));
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (!plansConfig.userProductOptionsId
      || !plansConfig.userDeliveryDateId
      || !plansConfig.userProductOptionsId.length
    ) { return setError(true); }
    updatePlansConfig({
      input: 'address',
      value: {
        completeName: '',
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: '',
      },
    });
    setError(false);
    return navigate('/sign-plan/address');
  };
  return (
    <StyletNewSignatureForm onSubmit={submitForm}>
      <div className="white-area">
        <img className="form-img" src={signImage} alt="form" />
        {error ? <h5>Preencha todos os campos e escolha ao menos um produto</h5> : ''}
        {
        newSignatureForm
          ? (
            <>
              <PlanOptionCard
                formData={newSignatureForm}
              />
              <DeliveryDateOptionCard
                formData={newSignatureForm}
              />
              <ProducOptionsCard
                formData={newSignatureForm}
              />
            </>
          )
          : ''
      }
      </div>

      <Button type="submit" height="40px">Próximo</Button>

    </StyletNewSignatureForm>
  );
};

export default NewSignatureForm;

const StyletNewSignatureForm = styled.form`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  .white-area{
    background-color: #ffffff;
    border-radius: 10px;
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;
