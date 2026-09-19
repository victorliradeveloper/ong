import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/constants/theme';

const Hero = styled.section`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 80px 40px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${colors.accentLight};
  margin-bottom: 32px;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonPrimary = styled(Link)`
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

const ButtonOutline = styled(Link)`
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

const Stats = styled.section`
  background-color: ${colors.light};
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.primary};
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${colors.gray};
  margin-top: 4px;
`;

const Section = styled.section`
  padding: 60px 40px;
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: ${colors.primary};
  margin-bottom: 8px;
`;

const SectionSubtitle = styled.p`
  color: ${colors.gray};
  margin-bottom: 40px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${colors.light};
  border-radius: 12px;
  padding: 28px;
  text-align: center;
`;

const CardIcon = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  color: ${colors.primary};
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 13px;
  color: ${colors.gray};
  line-height: 1.6;
`;

const stats = [
  { number: '200+', label: 'Animais abrigados' },
  { number: '3.900+', label: 'Adoções realizadas' },
  { number: '15.000+', label: 'Castrações feitas' },
  { number: '60+', label: 'Voluntários ativos' },
]

const pillars = [
  { icon: '✂️', title: 'Castração', text: 'A forma mais efetiva de combater o abandono. Realizamos castrações com apoio de doações.' },
  { icon: '🏠', title: 'Resgate e Adoção', text: 'Tiramos das ruas, cuidamos da saúde e encontramos uma família amorosa para cada animal.' },
  { icon: '📚', title: 'Educação', text: 'A conscientização de cada pessoa transforma a sociedade e reduz o abandono de animais.' },
]

export default function HomeView() {
  return (
    <>
      <Hero>
        <HeroTitle>Cada animal merece uma chance</HeroTitle>
        <HeroSubtitle>Resgatamos. Cuidamos. Adotamos.</HeroSubtitle>
        <HeroButtons>
          <ButtonPrimary href="/adocao">Quero adotar</ButtonPrimary>
          <ButtonOutline href="/doe">Como ajudar</ButtonOutline>
        </HeroButtons>
      </Hero>

      <Stats>
        {stats.map(stat => (
          <StatItem key={stat.label}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </Stats>

      <Section>
        <SectionTitle>Nossos pilares</SectionTitle>
        <SectionSubtitle>Atuamos em três frentes para transformar a vida dos animais.</SectionSubtitle>
        <CardsGrid>
          {pillars.map(p => (
            <Card key={p.title}>
              <CardIcon>{p.icon}</CardIcon>
              <CardTitle>{p.title}</CardTitle>
              <CardText>{p.text}</CardText>
            </Card>
          ))}
        </CardsGrid>
      </Section>
    </>
  );
}
