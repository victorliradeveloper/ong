import styled from 'styled-components';
import Link from 'next/link';
import { colors, shadows } from '@/constants/theme';

export const Nav = styled.header`
  background-color: ${colors.primary};
  padding: 0 60px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${shadows.md};

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const Logo = styled(Link)`
  color: ${colors.white};
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${colors.accentLight};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    color: ${colors.white};
    background: rgba(255,255,255,0.1);
  }
`;
