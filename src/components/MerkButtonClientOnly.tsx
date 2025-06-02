"use client"

import dynamic from "next/dynamic"
import { Loading } from "./Loading"

const MerkButtonDynamic = dynamic(() => import("./MerkButton"), {
    ssr: false,
    loading: () => <Loading />
})

export const MerkButtonClientOnly: React.FC<{ id: string }> = ({ id }) => {

    return <MerkButtonDynamic id={id} />
}