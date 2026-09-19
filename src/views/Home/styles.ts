import styled from 'styled-components';
import { colors, shadows, radius } from '@/constants/theme';

/* ── Hero ── */
export const Hero = styled.div`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryMid} 100%);
  color: ${colors.white};
  padding: 100px 60px 96px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 60px;
    background: ${colors.white};
    clip-path: ellipse(55% 100% at 50% 100%);
  }

  @media (max-width: 768px) {
    padding: 72px 24px 80px;
  }
`;

export const HeroBadge = styled.span`
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: ${colors.accentLight};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 5px 16px;
  border-radius: ${radius.pill};
  margin-bottom: 20px;
  border: 1px solid rgba(255,255,255,0.2);
`;

export const HeroTitle = styled.h1`
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.1;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${colors.accentLight};
  margin-bottom: 40px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonPrimary = styled.a`
  background-color: ${colors.white};
  color: ${colors.primary};
  padding: 14px 32px;
  border-radius: ${radius.pill};
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: ${shadows.md};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.lg};
  }
`;

export const ButtonOutline = styled.a`
  border: 2px solid rgba(255,255,255,0.5);
  color: ${colors.white};
  padding: 14px 32px;
  border-radius: ${radius.pill};
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: ${colors.white};
    background: rgba(255,255,255,0.08);
  }
`;

/* ── Stats ── */
export const Stats = styled.div`
  padding: 64px 60px;
  display: flex;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 48px 24px;
    gap: 32px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 140px;
  padding: 0 24px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: ${colors.border};

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StatNumber = styled.div`
  font-size: 42px;
  font-weight: 800;
  color: ${colors.primary};
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 6px;
`;

export const StatLabel = styled.div`
  font-size: 13px;
  color: ${colors.gray};
  font-weight: 500;
`;

/* ── Shared section wrapper ── */
export const Section = styled.div`
  padding: 80px 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`;

export const SectionBadge = styled.span`
  display: inline-block;
  background-color: ${colors.accentBg};
  color: ${colors.primaryMid};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 4px 14px;
  border-radius: ${radius.pill};
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 10px;
  letter-spacing: -0.5px;
`;

export const SectionSubtitle = styled.p`
  color: ${colors.gray};
  font-size: 16px;
  margin-bottom: 48px;
  max-width: 560px;
  line-height: 1.6;
`;

/* ── Pillars ── */
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: ${radius.lg};
  padding: 32px;
  text-align: center;
  transition: all 0.25s;

  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadows.md};
    transform: translateY(-2px);
  }
`;

export const CardIcon = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: ${colors.gray};
  line-height: 1.7;
`;

/* ── About ── */
export const AboutSection = styled.div`
  background: ${colors.lightGreen};
  padding: 80px 60px;

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`;

export const AboutInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutText = styled.p`
  font-size: 16px;
  color: ${colors.darkMid};
  line-height: 1.85;
  margin-bottom: 16px;
  max-width: 720px;

  strong { color: ${colors.primary}; }
`;

/* ── Adoption ── */
export const AdoptionBanner = styled.div`
  background: linear-gradient(135deg, ${colors.primaryMid} 0%, ${colors.primary} 100%);
  color: ${colors.white};
  padding: 80px 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`;

export const AdoptionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
`;

export const AdoptionText = styled.p`
  font-size: 17px;
  color: ${colors.accentLight};
  max-width: 560px;
  margin: 0 auto 36px;
  line-height: 1.7;
`;

export const AdoptionButton = styled.a`
  background-color: ${colors.white};
  color: ${colors.primary};
  padding: 15px 40px;
  border-radius: ${radius.pill};
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  box-shadow: ${shadows.md};
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.lg};
  }
`;

/* ── How to Help ── */
export const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpCard = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: ${radius.lg};
  padding: 32px;
  text-align: center;
  border-top: 3px solid ${colors.accent};
  transition: all 0.25s;

  &:hover {
    box-shadow: ${shadows.md};
    transform: translateY(-2px);
  }
`;

export const HelpCardTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 10px;
`;

export const HelpCardText = styled.p`
  font-size: 14px;
  color: ${colors.gray};
  line-height: 1.7;
`;

/* ── Contact ── */
export const ContactSection = styled.div`
  background: ${colors.lightGreen};
  padding: 80px 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`;

export const ContactGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
`;

export const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: ${radius.md};
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.darkMid};
  text-decoration: none;
  box-shadow: ${shadows.sm};
  transition: all 0.2s;

  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadows.md};
    transform: translateY(-1px);
    color: ${colors.primary};
  }
`;
