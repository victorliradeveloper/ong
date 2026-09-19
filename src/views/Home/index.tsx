import {
  Hero, HeroBadge, HeroTitle, HeroSubtitle, HeroButtons, ButtonPrimary, ButtonOutline,
  Stats, StatItem, StatNumber, StatLabel,
  Section, SectionBadge, SectionTitle, SectionSubtitle,
  CardsGrid, Card, CardIcon, CardTitle, CardText,
  AboutSection, AboutInner, AboutText,
  AdoptionBanner, AdoptionTitle, AdoptionText, AdoptionButton,
  HelpGrid, HelpCard, HelpCardTitle, HelpCardText,
  ContactSection, ContactGrid, ContactCard,
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

const helpOptions = [
  { icon: '❤️', title: 'Doe', text: 'Contribua com qualquer valor. Sua doação garante alimentação, veterinário e cuidados diários para os animais.' },
  { icon: '🤝', title: 'Seja voluntário', text: 'Venha colocar a mão na massa! Ajude nos cuidados, passeios, transporte e muito mais.' },
  { icon: '📣', title: 'Divulgue', text: 'Compartilhe nas redes sociais e ajude a encontrar um lar para os animais que estão esperando.' },
];

const contacts = [
  { href: 'https://wa.me/5527981667886', label: '📞 (27) 98166-7886', external: true },
  { href: 'https://www.instagram.com/animaiscarenteses/', label: '📸 Instagram', external: true },
  { href: 'https://www.facebook.com/animaiscarenteses3', label: '📘 Facebook', external: true },
  { href: '#', label: '📍 Vila Velha, ES', external: false },
];

export default function HomeView() {
  return (
    <>
      <section id="inicio">
        <Hero>
          <HeroBadge>🐾 ONG em Vila Velha/ES</HeroBadge>
          <HeroTitle>Cada animal merece uma chance</HeroTitle>
          <HeroSubtitle>Resgatamos. Cuidamos. Adotamos.</HeroSubtitle>
          <HeroButtons>
            <ButtonPrimary href="#adocao">Quero adotar</ButtonPrimary>
            <ButtonOutline href="#ajudar">Como ajudar</ButtonOutline>
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
      </section>

      <section id="sobre">
        <AboutSection>
          <AboutInner>
            <SectionBadge>Quem somos</SectionBadge>
            <SectionTitle>Nossa história</SectionTitle>
            <AboutText>
              A <strong>Animais Carentes ES</strong> é uma ONG localizada em Vila Velha/ES, dedicada ao resgate, abrigo e adoção de animais em situação de vulnerabilidade. Abrimos todos os dias e contamos com uma equipe de voluntários apaixonados que cuidam de mais de 200 animais diariamente.
            </AboutText>
            <AboutText>
              Nossa missão é garantir que cada animal resgatado receba atendimento veterinário, alimentação de qualidade e, principalmente, uma família que o ame. Acreditamos que a educação e a conscientização são fundamentais para combater o abandono.
            </AboutText>
            <SectionSubtitle style={{ marginTop: 40, marginBottom: 24 }}>Atuamos em três frentes para transformar a vida dos animais.</SectionSubtitle>
            <CardsGrid>
              {pillars.map(p => (
                <Card key={p.title}>
                  <CardIcon>{p.icon}</CardIcon>
                  <CardTitle>{p.title}</CardTitle>
                  <CardText>{p.text}</CardText>
                </Card>
              ))}
            </CardsGrid>
          </AboutInner>
        </AboutSection>
      </section>

      <section id="adocao">
        <AdoptionBanner>
          <CardIcon style={{ fontSize: 52, marginBottom: 20 }}>🐶🐱</CardIcon>
          <AdoptionTitle>Quero adotar!</AdoptionTitle>
          <AdoptionText>
            Temos muitos animais esperando por uma família. Para iniciar o processo de adoção, entre em contato conosco pelo WhatsApp ou visite nossa ONG.
          </AdoptionText>
          <AdoptionButton href="https://wa.me/5527981667886" target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </AdoptionButton>
        </AdoptionBanner>
      </section>

      <section id="ajudar">
        <Section>
          <SectionBadge>Faça parte</SectionBadge>
          <SectionTitle>Como ajudar</SectionTitle>
          <SectionSubtitle>Existem várias formas de fazer a diferença na vida dos animais.</SectionSubtitle>
          <HelpGrid>
            {helpOptions.map(h => (
              <HelpCard key={h.title}>
                <CardIcon>{h.icon}</CardIcon>
                <HelpCardTitle>{h.title}</HelpCardTitle>
                <HelpCardText>{h.text}</HelpCardText>
              </HelpCard>
            ))}
          </HelpGrid>
        </Section>
      </section>

      <section id="contato">
        <ContactSection>
          <SectionBadge>Fale conosco</SectionBadge>
          <SectionTitle>Contato</SectionTitle>
          <SectionSubtitle style={{ margin: '0 auto' }}>Estamos abertos todos os dias. Venha nos visitar ou entre em contato pelas nossas redes.</SectionSubtitle>
          <ContactGrid>
            {contacts.map(c => (
              <ContactCard
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
              >
                {c.label}
              </ContactCard>
            ))}
          </ContactGrid>
        </ContactSection>
      </section>
    </>
  );
}
