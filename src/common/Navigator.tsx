import { useNavigate } from "react-router-dom"

// This exposes React Router's navigation function
// for use inside Redux reducers and sagas
// eslint-disable-next-line import/no-mutable-exports
export let navigate: (link: string) => void

export default function Navigator() {
    navigate = useNavigate()

    return null
}
