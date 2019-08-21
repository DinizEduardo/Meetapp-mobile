import React from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText,
} from './styles';
import Background from '~/components/Background';

export default function SignIn({navigation}) {
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
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <SignText>Criar conta gratuita</SignText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
