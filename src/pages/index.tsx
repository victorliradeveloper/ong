import Head from 'next/head';
import HomeView from '@/views/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Animais Carentes ES</title>
        <meta name="description" content="ONG de abrigo e adoção de animais em Vila Velha/ES" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeView />
    </>
  );
}
