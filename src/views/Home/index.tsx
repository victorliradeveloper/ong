import {
  Hero, HeroTitle, HeroSubtitle, HeroButtons, ButtonPrimary, ButtonOutline,
  Stats, StatItem, StatNumber, StatLabel,
  Section, SectionTitle, SectionSubtitle,
  CardsGrid, Card, CardIcon, CardTitle, CardText,
} from './styles';

const stats = [
  { number: '200+', label: 'Animais abrigados' },
  { number: '3.900+', label: 'Adoções realizadas' },
  { number: '60+', label: 'Voluntários ativos' },
];

const pillars = [
  { icon: '🏠', title: 'Abrigo Temporário', text: 'Oferecemos um lar seguro para os animais resgatados enquanto aguardam uma família adotante.' },
  { icon: '🐾', title: 'Resgate e Adoção', text: 'Tiramos das ruas, cuidamos da saúde e encontramos uma família amorosa para cada animal.' },
  { icon: '📚', title: 'Educação', text: 'A conscientização de cada pessoa transforma a sociedade e reduz o abandono de animais.' },
];

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
