import { screenSizes } from "../utils/constants";
import styled, { css } from "styled-components";

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${props => props.$centered && css`
    justify-content: center;
  `}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;

      @media (max-width: ${screenSizes.tablet}) {
        font-size: 2.3rem;
      }
    `}

      line-height: 1.5;

  & svg {
    font-size: 2.8rem;
  }

  & span:first-of-type {
    display: flex;
    align-items: center;
  }
`;

export default Heading;
