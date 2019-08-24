import React from 'react';
import logo from '~/assets/logo.png';
import { Image } from 'react-native';

import { Container, ImageLogo } from './styles';

export default function Header() {
  return (
    <Container>
      <ImageLogo source={logo} />
    </Container>
  );
}
