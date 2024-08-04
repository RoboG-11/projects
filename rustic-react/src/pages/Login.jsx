import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { screenSizes } from "../utils/constants";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import LogoLogin from "../ui/LogoLogin";
import Button from "../ui/Button";


const LoginLayout = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr;
    padding: 2rem 2.4rem;
    gap: 1.6rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
  }
`;

function Login() {
  return (
    <LoginLayout>

      <LogoLogin />

      <Heading as="h1" $centered>
        <span>
          <HiOutlineArrowLeftOnRectangle />
        </span>
        Login to your account
      </Heading>

      <LoginForm />

      <StyledDiv>
        <NavLink to={"/signup"}>
          <Button variation="secondary">
            {" "}
            Don&apos;t have an account?
            <strong> Sign Up </strong>
          </Button>
        </NavLink>
        <NavLink to={"/reset-password"}>
          <Button variation="secondary">Forgot your password?</Button>
        </NavLink>
      </StyledDiv>
    </LoginLayout>
  );
}

export default Login;
