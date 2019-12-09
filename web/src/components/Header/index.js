import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Options, Profile } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/discoveries">
            <img src={logo} alt="Discovery" />
          </Link>
        </nav>

        <Options>
          <Link to="/discoveries">Descobertas</Link>
        </Options>
        <aside>
          <Profile>
            <div>
              {/* <strong>{profile.name}</strong> */}
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
