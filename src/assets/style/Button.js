import styled from 'styled-components';

const Button = styled.button`
  width: ${({ width }) => (width || '237px')};
  height: ${({ height }) => (height || '56px')};
  font-family: 'primaryBold';
  font-size: 18px;
  color: #ffffff;
  background-color: ${({ backGround }) => (backGround === 'secondary' ? 'inherit' : '#8C97EA')};
  border-radius: 10px;
`;

export default Button;
