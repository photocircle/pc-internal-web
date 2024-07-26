import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { store } from "./store"
import Navigator from "./common/Navigator"
import { Loader } from "./components/common/Loader"
import { Homepage } from "./pages/Homepage"
import "react-toastify/dist/ReactToastify.css"
import './assets/style.less'

function App() {
    return (
        <Suspense fallback={<Loader fullscreen />}>
            <BrowserRouter>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover
                    theme="light"
                />
                <Navigator />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>

    )
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
