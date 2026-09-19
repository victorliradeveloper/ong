import { Nav, Logo, NavLinks, NavLink } from './styles';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Quem somos' },
  { href: '#adocao', label: 'Adoção' },
  { href: '#ajudar', label: 'Como ajudar' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  return (
    <Nav>
      <Logo href="/">
        Animais <span>Carentes ES</span>
      </Logo>
      <NavLinks>
        {links.map(link => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}
