import { Wrapper, Title, Subtitle, MapFrame } from './styles';

export default function MapSection() {
  return (
    <Wrapper>
      <Title>Onde estamos</Title>
      <Subtitle>R. H, 122 — Chacáras Kajo, Vila Velha/ES, 29113-029</Subtitle>
      <MapFrame
        src="https://maps.google.com/maps?q=-20.4509244,-40.345816&z=16&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da ONG Animais Carentes ES"
      />
    </Wrapper>
  );
}
