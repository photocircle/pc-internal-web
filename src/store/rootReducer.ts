import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./auth/auth.reducer"

const rootReducer = combineReducers({
    auth: authReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
