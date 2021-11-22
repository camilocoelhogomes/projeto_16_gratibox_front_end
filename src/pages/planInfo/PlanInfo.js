import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';
import img from '../../assets/images/image03.jpg';
import Button from '../../assets/style/Button';

const PlanInfo = function () {
  const { userData } = useContext(UserContext);
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

  const [nextDelivery, setNextDelivery] = useState();

  useEffect(() => {
    if (!userData || !userData?.userPlanSignatureDate) navigate('/');
    if (userData?.userPlan === 'semanal') {
      setNextDelivery(dayjs(getNextDayOfWeek(new Date(), weekDays[userData?.deliveryDate])).format('DD/MM/YYYY'));
    } else {
      setNextDelivery('Calculado');
    }
  }, []);

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
            Próxima entrega:
            {' '}
            {nextDelivery}
          </h5>
        </div>
        <div className="products-area">
          {
            userData?.productOption.map((item) => <div><h5>{item}</h5></div>)
          }
        </div>
      </div>
      <div className="button-area">
        <Button>Avaliar Entregas: A implementar</Button>
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
