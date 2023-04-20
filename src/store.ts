import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { authSlice } from './features/AuthState/auth'
import counterReducer from './features/counter/counterSlice'
import { courseApi } from './services/Courses/courseapi'
import { docsApi } from './services/docs'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(docsApi.middleware).concat(courseApi.middleware),
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer,
    [docsApi.reducerPath]: docsApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
