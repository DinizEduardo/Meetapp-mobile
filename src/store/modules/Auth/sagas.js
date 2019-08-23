import { all, put, call, takeLatest } from 'redux-saga/effects';
// import history from '../../../services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'login', {
    email,
    password,
  });
  const { token, user } = response.data;

  if (!user) {
    console.tron.log('usuario invalido');
    return;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(signInSuccess(token, user));

  // history.push('/dashboard');
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  yield call(api.post, 'users', {
    name,
    email,
    password,
  });
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
