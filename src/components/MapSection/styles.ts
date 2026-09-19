import styled from 'styled-components';
import { colors } from '@/constants/theme';

export const Wrapper = styled.section`
  background-color: ${colors.light};
  padding: 60px 40px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: ${colors.primary};
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: ${colors.gray};
  font-size: 14px;
  margin-bottom: 32px;
`;

export const MapFrame = styled.iframe`
  width: 100%;
  max-width: 1100px;
  height: 400px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 280px;
  }
`;
