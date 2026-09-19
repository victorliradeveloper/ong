import styled from 'styled-components';
import { colors, shadows } from '@/constants/theme';

export const Wrapper = styled.section`
  background-color: ${colors.white};
  padding: 80px 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`;

export const Label = styled.span`
  display: inline-block;
  background-color: ${colors.accentBg};
  color: ${colors.primaryMid};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: ${colors.gray};
  font-size: 15px;
  margin-bottom: 40px;
`;

export const MapFrame = styled.iframe`
  width: 100%;
  max-width: 1100px;
  height: 420px;
  border: none;
  border-radius: 16px;
  box-shadow: ${shadows.lg};

  @media (max-width: 768px) {
    height: 280px;
  }
`;
