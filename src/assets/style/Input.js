import styled from 'styled-components';

const Input = styled.input`
width: 100%;
height: 48px;
border: 1px solid #604848;
border-radius: 10px;
font-size: 24px;
padding: 18px;
font-family: 'primaryNormal';

::placeholder{
  color: #60484866;
}
`;

const FormInput = styled.input`
width: 100%;
height: 30px;
border:none;
border-radius: 10px;
padding: 18px;
font-family: 'primaryNormal';
font-size: 18px;
line-height: 21px;
color: #4D65A8;
background-color: #ECE2F4;

::placeholder{
  font-size: 18px;
  line-height: 21px;
  color: #4D65A8AA;
}
`;

export { Input, FormInput };
