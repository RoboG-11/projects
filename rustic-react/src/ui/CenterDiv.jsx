import React from 'react';

import styled from 'styled-components';

import { screenSizes } from "../utils/constants";

const StyledCenterDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: max-content;
  z-index: 100;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  overflow: auto;
    width: 90%;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: ${screenSizes.mobile}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${screenSizes.tablet}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${screenSizes.laptop}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function CenterDiv({ children }) {
  return (
    <StyledCenterDiv>
      {children}
    </StyledCenterDiv>
  );
}
