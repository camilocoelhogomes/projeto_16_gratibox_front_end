import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';
import img from '../../assets/images/image03.jpg';

const PlanInfo = function () {
  const { userData } = useContext(UserContext);
  console.log(userData);
  const navigate = useNavigate();
  const weekDays = {
    Segunda: 2,
    Quarta: 4,
    Sexta: 6,
  };
  function getNextDayOfWeek(date, dayOfWeek) {
    const resultDate = new Date(date.getTime());
    // eslint-disable-next-line no-mixed-operators
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    return resultDate;
  }
  const [
    deliveryDates,
    setDeliveryDates] = useState([getNextDayOfWeek(new Date(), weekDays[userData?.deliveryDate])]);

  useEffect(() => {
    if (!userData || !userData?.userPlanSignatureDate) navigate('/');
    const newDeliveryDates = [...deliveryDates];
    for (let i = 0; i < 2; i += 1) {
      // eslint-disable-next-line max-len
      newDeliveryDates.push(getNextDayOfWeek(newDeliveryDates[i].setDate(newDeliveryDates[i].getDate() + 1), weekDays[userData?.deliveryDate]));
    }
    setDeliveryDates(newDeliveryDates);
  }, []);

  console.log(getNextDayOfWeek(new Date(), 4));
  return (
    <StyledPlanInfo>
      <PageHeader
        title={`Bom te ver por aqui, ${userData?.userName}.`}
        subTitle="“Agradecer é arte de atrair coisas boas”"
      />
      <div className="white-area">
        <img src={img} alt="plan" />
        <div className="info-area">
          <h5>
            {' '}
            Plano:
            {' '}
            {userData?.userPlan }
          </h5>
        </div>
        <div className="info-area">
          <h5>
            {' '}
            Data da Assinatura:
            {' '}
            {dayjs(userData?.userPlanSignatureDate).format('DD/MM/YYYY') }
          </h5>
        </div>
        <div className="info-area">
          <h5>
            Próximas entregas:
          </h5>
          {deliveryDates.map((deliveryDate) => <h5>{ dayjs(deliveryDate).format('DD/MM/YYYY')}</h5>)}
        </div>
        <div className="products-area">
          {
            userData?.productOption.map((item) => <div><h5>{item}</h5></div>)
          }
        </div>
      </div>
    </StyledPlanInfo>
  );
};

export default PlanInfo;

const StyledPlanInfo = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 43px 25px 0px 25px;
  justify-content: center;

 .white-area{
    background-color: #ffffff;
    border-radius: 10px;
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .info-area{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
  }

  .products-area{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`;
