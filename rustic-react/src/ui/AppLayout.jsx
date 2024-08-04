import { Outlet } from "react-router-dom";
import { useOpenSidebar } from "../hooks/useOpenSideBar";
import { screenSizes } from "../utils/constants";
import styled, { css } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  min-height: 100dvh;
  transition: ease-in-out 0.35s;
  transition: all 0.5s;
`;

const transform = {
  open: css`
    @media (max-width: ${screenSizes.tablet}) {
      /* transform: translateX(26rem);
      transition: ease-in-out 0.35s; */
    }
  `,
  closed: css`
    @media (max-width: ${screenSizes.tablet}) {
      /* transform: translateX(0rem);
      transition: ease-in-out 0.35s; */
    }
  `,
};

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem;
  min-height: 100dvh;
  overflow: auto;
  display: flex;

  ${(props) => transform[props.transform]}

  @media (max-width: ${screenSizes.tablet}) {
    padding: 2rem 2.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  gap: 3.2rem;

  @media (max-width: ${screenSizes.tablet}) {
    gap: 1.6rem;
  }
`;

function AppLayout() {
  const { isSidebarOpen } = useOpenSidebar();

  return (
    <>
      <StyledAppLayout>
        <Header />

        <Sidebar />

        <Main transform={isSidebarOpen ? "open" : "closed"}>
          <Container>
            <Outlet />
          </Container>
        </Main>

      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
