import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/constants/theme';

export const Hero = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 80px 40px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${colors.accentLight};
  margin-bottom: 32px;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonPrimary = styled.a`
  background-color: ${colors.white};
  color: ${colors.primary};
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.9; }
`;

export const ButtonOutline = styled.a`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.1); }
`;

export const Stats = styled.div`
  background-color: ${colors.light};
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${colors.gray};
  margin-top: 4px;
`;

export const Section = styled.div`
  padding: 40px 40px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: ${colors.primary};
  margin-bottom: 8px;
`;

export const SectionSubtitle = styled.p`
  color: ${colors.gray};
  margin-bottom: 40px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${colors.light};
  border-radius: 12px;
  padding: 28px;
  text-align: center;
`;

export const CardIcon = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: ${colors.primary};
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  font-size: 13px;
  color: ${colors.gray};
  line-height: 1.6;
`;

export const AboutSection = styled.div`
  padding: 60px 40px 0;
  max-width: 1100px;
  margin: 0 auto;
`;

export const AboutText = styled.p`
  font-size: 15px;
  color: ${colors.gray};
  line-height: 1.8;
  margin-bottom: 16px;
  max-width: 800px;
`;

export const AdoptionBanner = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 60px 40px;
  text-align: center;
`;

export const AdoptionText = styled.p`
  font-size: 16px;
  color: ${colors.accentLight};
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.7;
`;

export const AdoptionButton = styled.a`
  background-color: ${colors.white};
  color: ${colors.primary};
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.2s;

  &:hover { opacity: 0.9; }
`;

export const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpCard = styled.div`
  background: ${colors.grayLight};
  border-radius: 12px;
  padding: 28px;
  text-align: center;
  border-top: 4px solid ${colors.accent};
`;

export const HelpCardTitle = styled.h3`
  font-size: 16px;
  color: ${colors.primary};
  margin-bottom: 8px;
`;

export const HelpCardText = styled.p`
  font-size: 13px;
  color: ${colors.gray};
  line-height: 1.6;
`;

export const ContactSection = styled.div`
  background-color: ${colors.light};
  padding: 60px 40px;
  text-align: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`;

export const ContactItem = styled.p`
  font-size: 15px;
  color: ${colors.gray};

  a {
    color: ${colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover { text-decoration: underline; }
  }
`;
