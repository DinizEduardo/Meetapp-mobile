import React from 'react';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/Auth/actions';
import { useDispatch } from 'react-redux';
import { LogoutButton } from './styles';

import { Container, Form, FormInput, Separator, SubmitButton } from './styles';
import Background from '~/components/Background';

export default function Profile() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Header />
        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
          />

          <Separator />

          <FormInput secureTextEntry placeholder="Senha atual" />
          <FormInput secureTextEntry placeholder="Nova senha" />
          <FormInput secureTextEntry placeholder="Confirmação de senha" />
          <SubmitButton onPress={() => {}}>Salvar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do Meetapp</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
