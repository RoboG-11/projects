import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

const FullPageContainer = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingDots = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--color-brand-600);
  border-radius: 50%;
  margin: 0 10px;
  animation: ${bounceAnimation} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

function LoadingFullPage() {
  return (
    <FullPageContainer>
      <LoadingDots>
        <Dot />
        <Dot />
        <Dot />
      </LoadingDots>
    </FullPageContainer>
  );
}

export default LoadingFullPage;
