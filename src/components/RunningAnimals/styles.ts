import styled, { keyframes } from 'styled-components';
import { colors } from '@/constants/theme';

const run = keyframes`
  0%   { transform: translate(110vw,  0px); }
  20%  { transform: translate(80vw,  -10px); }
  40%  { transform: translate(60vw,   0px); }
  60%  { transform: translate(40vw,  -10px); }
  80%  { transform: translate(20vw,   0px); }
  100% { transform: translate(-120px,-10px); }
`;

export const Wrapper = styled.section`
  background: ${colors.accentBg};
  padding: 40px 0;
  overflow: hidden;
  position: relative;
  border-top: 1px solid ${colors.accentLight};
  border-bottom: 1px solid ${colors.accentLight};
`;

export const Label = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${colors.primaryMid};
  margin-bottom: 20px;
  opacity: 0.7;
`;

export const Track = styled.div`
  position: relative;
  height: 110px;
`;

export const Animal = styled.span<{
  $duration: number;
  $delay: number;
  $top: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  font-size: ${({ $size }) => $size}px;
  animation: ${run} ${({ $duration }) => $duration}s linear ${({ $delay }) => $delay}s infinite;
  user-select: none;
  will-change: transform;
  line-height: 1;
`;
