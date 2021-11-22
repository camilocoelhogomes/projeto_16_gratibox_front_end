import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import signImage from '../../../assets/images/image03.jpg';
import Button from '../../../assets/style/Button';
import PlansConfigContext from '../../../Context/PlansConfigContext';
import { FormInput } from '../../../assets/style/Input';

const NewAddressForm = function () {
  const { plansConfig } = useContext(PlansConfigContext);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(plansConfig);
    return navigate('/sign-plan/address');
  };
  return (
    <StyletNewAddressForm onSubmit={submitForm}>
      <div className="white-area">
        <img className="form-img" src={signImage} alt="form" />
        <FormInput
          placeholder="Nome Completo"
        />
        <FormInput
          placeholder="CEP"
        />
        <FormInput
          placeholder="Endereço"
        />
        <div className="single-line">
          <FormInput
            placeholder="Número"
          />
          <FormInput
            placeholder="Bairro"
          />
        </div>
        <div className="single-line">
          <FormInput
            placeholder="Cidade"
            disabled
          />
          <FormInput
            placeholder="Estado"
            disabled
          />
        </div>
      </div>

      <Button type="submit" height="40px">Próximo</Button>

    </StyletNewAddressForm>
  );
};

export default NewAddressForm;

const StyletNewAddressForm = styled.form`
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
  .single-line{
    display: flex;
    gap: 8px;
  }
`;
