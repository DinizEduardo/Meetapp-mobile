import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess } from './actions';

export function* updateProfileRequest({ payload }) {
  const response = yield call(api.put, 'users', payload.data);

  yield put(updateProfileSuccess(response.data));
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
