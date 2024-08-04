import styled from "styled-components";

import { screenSizes } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { HiEnvelope } from "react-icons/hi2";

import Button from "../ui/Button";

const Layout = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: ${screenSizes.mobile}) {
    padding: 1.5rem;
    flex-direction: column;
  }
`;

const StyledContainer = styled.div`
  max-width: 48rem;
  background-color: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${screenSizes.mobile}) {
    padding: 2rem;
    flex-direction: column;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.25rem;


  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const IconContainer = styled.span`
  font-size: 2.5rem;
  color: var(--color-primary-600);
  flex-shrink: 0;
`;

const JustifyParagraph = styled.p`
  text-align: justify;
  font-size: 1.6rem;
  line-height: 1.5;
  color: var(--color-grey-700);
  margin: 0;
`;


const ConfirmEmail = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <Layout>
      <StyledContainer>
        <MessageContainer>

          <IconContainer>
            <HiEnvelope />
          </IconContainer>

          <JustifyParagraph>
            Account created successfully! Please check your email and click on the confirmation link to activate your account.
          </JustifyParagraph>
        </MessageContainer>
      </StyledContainer>

      <Button
        variation="primary"
        onClick={handleBackToLogin}>
        Back to Login
      </Button>
    </Layout>
  );
};

export default ConfirmEmail;
