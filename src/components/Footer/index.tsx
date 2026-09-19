import { Wrapper, Grid, Column, Title, Text, Bottom } from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        <Column>
          <Title>Animais Carentes ES</Title>
          <Text>ONG dedicada ao resgate, cuidado e adoção de animais em situação de vulnerabilidade em Vila Velha/ES.</Text>
        </Column>
        <Column>
          <Title>Links</Title>
          <Text><a href="/sobre">Quem somos</a></Text>
          <Text><a href="/adocao">Adoção</a></Text>
          <Text><a href="/doe">Como ajudar</a></Text>
          <Text><a href="/contato">Contato</a></Text>
        </Column>
        <Column>
          <Title>Contato</Title>
          <Text>📞 (27) 98166-7886</Text>
          <Text>📍 Vila Velha, ES</Text>
          <Text>Abertos todos os dias</Text>
        </Column>
      </Grid>
      <Bottom>
        © {new Date().getFullYear()} Animais Carentes ES — Todos os direitos reservados.
      </Bottom>
    </Wrapper>
  );
}
