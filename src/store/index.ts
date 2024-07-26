import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux"
import rootReducer, { AppState } from "./rootReducer"

// Configure the store with Redux Toolkit and conditionally include the Redux DevTools
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
})

type AppDispatch = typeof store.dispatch;

// Create typed versions of the useDispatch and useSelector hooks
const useDispatch = () => useReduxDispatch<AppDispatch>()
const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector

export {
    store, useDispatch, useSelector,
}
