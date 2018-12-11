import {createStore, applyMiddleware, compose} from 'redux'
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import reducer from '../reducers'


const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'manta',
  storage,
}

export const configureStore = (initialSate) => {
  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(
    persistedReducer,
    initialSate,
    enhancer(applyMiddleware(thunk)),
  )

  return store

}

const store = configureStore()


export default store
