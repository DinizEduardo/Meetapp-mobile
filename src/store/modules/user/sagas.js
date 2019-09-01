import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';

import { updateProfileSuccess } from './actions';

export function* updateProfileRequest({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.data);
    if (response.data.id) {
      Alert.alert('Sucesso!', 'Perfil atualizado com sucesso');

      yield put(updateProfileSuccess(response.data));
    } else {
      Alert.alert(
        'Falha na atualização!',
        'Falha na atualização verifique seus dados'
      );
    }
  } catch (error) {
    Alert.alert('Falha na atualização!', 'Falha na atualização.');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
