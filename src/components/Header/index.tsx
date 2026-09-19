import { useRouter } from 'next/router';
import { Nav, Logo, NavLinks, NavLink } from './styles';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Quem somos' },
  { href: '/adocao', label: 'Adoção' },
  { href: '/doe', label: 'Como ajudar' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <Nav>
      <Logo href="/">
        Animais <span>Carentes ES</span>
      </Logo>
      <NavLinks>
        {links.map(link => (
          <NavLink key={link.href} href={link.href} $active={pathname === link.href}>
            {link.label}
          </NavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}
