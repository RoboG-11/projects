import { useOpenSidebar } from "../hooks/useOpenSideBar";
import styled, { css } from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";

const transform = {
  open: css`
    position: fixed;
    z-index: 10;
    transform: translate(0);
    transition: ease-in-out 0.4s;
    padding-top: 10rem;
  `,

  closed: css`
    position: fixed;
    z-index: 10;
    transition: ease-in-out 0.4s;
    transform: translate(-100%);
    padding-top: 10rem;
  `,
};

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 26rem;
  height: 100%;
  box-shadow: var(--shadow-md);

  ${(props) => transform[props.transform]}
`;

const CenterLogo = styled.div`
  display: flex;
  justify-content: center;
`;

function Sidebar() {
  const { sidebarRef, isSidebarOpen } = useOpenSidebar();

  return (
    <StyledSidebar
      ref={sidebarRef}
      transform={isSidebarOpen ? "open" : "closed"}
    >
      <CenterLogo>
        <Logo />
      </CenterLogo>

      <MainNav />

    </StyledSidebar>
  );
}

export default Sidebar;
