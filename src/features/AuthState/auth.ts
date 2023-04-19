import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { User } from 'firebase/auth'
export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  role: 'admin' | 'mentor' | 'mentee' | 'guest'
  error: string | null
}
let extractData = localStorage.getItem('auth') || '{}'
let data = JSON.parse(extractData) as AuthState
export const initialState: AuthState = data
export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true
      state.user = action.payload.user
      state.role = action.payload.role
      state.error = null
    },
  },
})
