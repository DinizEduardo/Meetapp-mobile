import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/Auth/actions';
import { useDispatch } from 'react-redux';
import { LogoutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }

  return <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
