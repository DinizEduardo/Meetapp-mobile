import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import NavigationService from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', {
      email,
      password,
    });
    const { token, user } = response.data;

    if (!user) {
      Alert.alert('Erro', 'Login invalido');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (error) {
    Alert.alert('Erro', 'Login invalido');
  }

  // history.push('/dashboard');
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    NavigationService.navigate('SignIn');
    Alert.alert('Sucesso', 'Conta criada com sucesso. Você já pode logar');
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no cadastro. Verifique seus dados'
    );
  }
  yield put(signFailure());

  // history.push('/');
}

export function signOut() {
  // history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
