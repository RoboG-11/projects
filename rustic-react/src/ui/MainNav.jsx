import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { useOpenSidebar } from "../hooks/useOpenSideBar";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUserGroup,
  HiServerStack,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;

  }

  &:hover svg {
    color: var(--color-brand-600);
    scale: 1.4;
  }

  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { toggleSidebar } = useOpenSidebar();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard" onClick={toggleSidebar}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/guests" onClick={toggleSidebar}>
            <HiOutlineUserGroup />
            <span>Guests</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/bookings" onClick={toggleSidebar}>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/cabins" onClick={toggleSidebar}>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/settings" onClick={toggleSidebar}>
            <HiOutlineAdjustmentsHorizontal />
            <span>Settings</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/load-data" onClick={toggleSidebar}>
            <HiServerStack />
            <span>Load data</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
