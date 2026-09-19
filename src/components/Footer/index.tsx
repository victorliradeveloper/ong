import { Wrapper, Grid, Column, BrandName, Title, Text, Bottom } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        <Column>
          <BrandName>🐾 Animais Carentes ES</BrandName>
          <Text>ONG dedicada ao resgate, cuidado e adoção de animais em situação de vulnerabilidade em Vila Velha/ES. Abertos todos os dias, movidos por amor e voluntariado.</Text>
        </Column>
        <Column>
          <Title>Navegação</Title>
          <Text><a href="#sobre">Quem somos</a></Text>
          <Text><a href="#adocao">Adoção</a></Text>
          <Text><a href="#ajudar">Como ajudar</a></Text>
          <Text><a href="#contato">Contato</a></Text>
        </Column>
        <Column>
          <Title>Contato</Title>
          <Text>📞 (27) 98166-7886</Text>
          <Text>📍 Vila Velha, ES</Text>
          <Text><a href="https://www.instagram.com/animaiscarenteses/" target="_blank" rel="noopener noreferrer">Instagram</a></Text>
          <Text><a href="https://www.facebook.com/animaiscarenteses3" target="_blank" rel="noopener noreferrer">Facebook</a></Text>
        </Column>
      </Grid>
      <Bottom>
        © {new Date().getFullYear()} Animais Carentes ES — Todos os direitos reservados.
      </Bottom>
    </Wrapper>
  );
}
