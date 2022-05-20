import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { pokemonApi } from './api'

import counterReducer from '../features/counter/counterSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            counter: counterReducer,
            [pokemonApi.reducerPath]: pokemonApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware),
    })
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default store
