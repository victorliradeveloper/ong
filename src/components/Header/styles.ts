import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/constants/theme';

export const Nav = styled.header`
  background-color: ${colors.primary};
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const Logo = styled(Link)`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.5px;

  span {
    color: ${colors.accentLight};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: ${colors.accentLight};
  }
`;
