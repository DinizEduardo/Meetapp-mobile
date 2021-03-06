import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText,
} from './styles';
import Background from '~/components/Background';

import { signInRequest } from '~/store/modules/Auth/actions';

export default function SignIn({ navigation }) {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <SignText>Criar conta</SignText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
