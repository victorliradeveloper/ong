import Head from 'next/head';
import HomeView from '@/views/Home';

const META = {
  title: 'Animais Carentes ES — Resgate e Adoção em Vila Velha/ES',
  description: 'ONG dedicada ao resgate, cuidado e adoção de animais em Vila Velha/ES. Mais de 3.900 adoções realizadas. Venha adotar ou ajude com doações e voluntariado.',
  url: 'https://animaiscarenteses.org.br',
  image: 'https://animaiscarenteses.org.br/og-image.jpg',
  siteName: 'Animais Carentes ES',
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Base */}
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#2D6A4F" />
        <meta name="author" content="Animais Carentes ES" />
        <link rel="canonical" href={META.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={META.siteName} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={META.url} />
        <meta property="og:image" content={META.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.image} />

        {/* Keywords */}
        <meta name="keywords" content="adoção de animais, ONG Vila Velha, resgate animal, adotar cachorro, adotar gato, Espírito Santo, voluntariado animal, doação ONG" />
      </Head>
      <HomeView />
    </>
  );
}
