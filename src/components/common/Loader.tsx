import React from "react"
import type { ReactNode } from "react"

interface ILoader {
    fullscreen?: boolean;
}

export function Spinner() {
    return (
        <div className="spinner">
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export function Loader({ fullscreen }: ILoader) {
    return (
        <div className="Loader" >
            <Spinner />
        </div>
    )
}

export type LoaderContainerProps = {
    isLoading?: boolean
    simple?: boolean
    children: ReactNode | JSX.Element | JSX.Element[]
}
