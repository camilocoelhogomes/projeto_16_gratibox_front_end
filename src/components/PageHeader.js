import React from 'react';
import styled from 'styled-components';

const PageHeader = function ({ title, subTitle }) {
  return (
    <StyledPageHeader>
      <div>
        <h1>{title}</h1>
      </div>
      {
        subTitle
          ? (
            <div>
              <h6 className="header-subtitle">{subTitle}</h6>
            </div>
          )
          : ''
      }
    </StyledPageHeader>
  );
};

export default PageHeader;

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;
  gap: 22px;
  justify-content: center;
  flex-direction: column;
  .header-subtitle{
    text-align: justify;
  }
`;
