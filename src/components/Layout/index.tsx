import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import RunningAnimals from '@/components/RunningAnimals';
import { Wrapper, Main } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <RunningAnimals />
      <MapSection />
      <Footer />
    </Wrapper>
  );
}
