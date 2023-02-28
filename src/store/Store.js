/* eslint-disable */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ADMIN_LOGOUT } from "./types/AdminConstants";

import {
  adminLoginReducer,
  adminRegisterReducer,
  forgetPasswordReducer,
  resetPasswordReducer,
} from "./reducer/AdminReducer";

import {todayReadingReducer,
avgFromDateRangeReducer,
deviceDataReducer,
getReadingReducer,
prevweekReducer
} from "./reducer/DashboardReduccer"

import {
  getInformationReducer,
  updateInformationReducer
  } from "./reducer/ProfileReducer"

const appReducer = combineReducers({
  adminLoginReducer,
  adminRegisterReducer,
  forgetPasswordReducer,
  resetPasswordReducer,

  todayReadingReducer,
  avgFromDateRangeReducer,
  deviceDataReducer,
  getReadingReducer,
  prevweekReducer,

  getInformationReducer,
  updateInformationReducer
});

const persistConf = {
  key: "root",
  storage,
};

const rootReducer = (state, action) => {
  if (action.type == ADMIN_LOGOUT) {
    // for all keys defined in your persistConfig(s)
    storage.removeItem("persist:root");
    // storage.removeItem('persist:otherKey')

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConf, rootReducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export default store;
