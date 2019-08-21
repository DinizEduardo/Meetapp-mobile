import React from 'react';
import {StatusBar} from 'react-native';

// import { Container } from './styles';
import Routes from './routes';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}
