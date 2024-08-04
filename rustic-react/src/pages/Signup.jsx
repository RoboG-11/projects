import styled from "styled-components";

import { screenSizes } from "../utils/constants";
import { HiOutlineUser } from "react-icons/hi2";

import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

const StyledNewUsers = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr;
    padding: 1rem 1.8rem;
    gap: 1.6rem;
  }
`;

function Signup() {

  return (
    <StyledNewUsers>
      <Heading as="h1" $centered>
        <span>
          <HiOutlineUser />
        </span>
        Create an account
      </Heading>

      <SignupForm />
    </StyledNewUsers>
  );
}

export default Signup;
