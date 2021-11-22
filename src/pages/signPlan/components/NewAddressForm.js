import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import signImage from '../../../assets/images/image03.jpg';
import Button from '../../../assets/style/Button';
import PlansConfigContext from '../../../Context/PlansConfigContext';
import { FormInput } from '../../../assets/style/Input';

const NewAddressForm = function () {
  const { plansConfig, updatePlansConfig } = useContext(PlansConfigContext);
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(plansConfig);
    return navigate('/sign-plan/address');
  };

  useEffect(() => {
    if (!plansConfig.address) navigate('/sign-plan');
  }, []);

  const updateAddress = ({ input, value }) => {
    const newAddress = { ...address };
    newAddress[input] = value;
    setAddress(newAddress);
    updatePlansConfig({ input: 'address', value: { ...newAddress } });
  };

  return (
    <StyletNewAddressForm onSubmit={submitForm}>
      <div className="white-area">
        <img className="form-img" src={signImage} alt="form" />
        <FormInput
          placeholder="Nome Completo"
          value={plansConfig?.address.completeName}
          onChange={(e) => updateAddress({ input: 'completeName', value: e.target.value })}
        />
        <FormInput
          placeholder="CEP"
          value={plansConfig?.address.cep}
          onChange={(e) => updateAddress({ input: 'cep', value: e.target.value })}
        />
        <FormInput
          placeholder="Endereço"
          value={plansConfig?.address.street}
          onChange={(e) => updateAddress({ input: 'street', value: e.target.value })}
        />
        <div className="single-line">
          <FormInput
            placeholder="Número"
            value={plansConfig?.address.number}
            onChange={(e) => updateAddress({ input: 'number', value: e.target.value.replace(/\D/g, '') })}
          />
          <FormInput
            placeholder="Bairro"
            value={plansConfig?.address.neighborhood}
            onChange={(e) => updateAddress({ input: 'neighborhood', value: e.target.value })}
          />
        </div>
        <div className="single-line">
          <FormInput
            placeholder="Cidade"
            value={plansConfig?.address.city}
            disabled
          />
          <FormInput
            placeholder="Estado"
            value={plansConfig?.address.state}
            disabled
          />
        </div>
      </div>

      <Button type="submit" height="40px">Finalizar</Button>

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
