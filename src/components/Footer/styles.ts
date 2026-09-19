import styled from 'styled-components';
import { colors } from '@/constants/theme';

export const Wrapper = styled.footer`
  background-color: ${colors.dark};
  color: ${colors.white};
  padding: 40px;
  margin-top: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  color: ${colors.accentLight};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #ccc;
  line-height: 1.6;

  a {
    color: #ccc;
    text-decoration: none;
    &:hover { color: ${colors.accentLight}; }
  }
`;

export const Bottom = styled.div`
  text-align: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #333;
  font-size: 12px;
  color: #888;
`;
