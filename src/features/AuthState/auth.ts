import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { User } from 'firebase/auth'
import { Mentees, Mentors } from '../../services/Courses/types'
export interface AuthState {
  isLoggedIn: boolean
  user: Mentees | null | Mentors
  role: 'mentor' | 'mentee' 
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
      localStorage.setItem('auth', JSON.stringify(state))
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
      state.role = 'mentee'
      state.error = null
      localStorage.removeItem('auth')
    }
  },
})
export const { login, logout } = authSlice.actions
