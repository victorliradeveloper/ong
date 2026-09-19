import styled from 'styled-components';
import { colors } from '@/constants/theme';

export const Wrapper = styled.footer`
  background-color: ${colors.dark};
  color: ${colors.white};
  padding: 56px 60px 32px;

  @media (max-width: 768px) {
    padding: 40px 24px 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BrandName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 4px;
`;

export const Title = styled.h4`
  color: ${colors.accentLight};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #9CA3AF;
  line-height: 1.7;

  a {
    color: #9CA3AF;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: ${colors.accentLight}; }
  }
`;

export const Bottom = styled.div`
  text-align: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #1F2937;
  font-size: 12px;
  color: #4B5563;
`;
