import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
