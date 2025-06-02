"use client"

import { Loading } from "@/components/Loading"
import dynamic from "next/dynamic"

const MerklisteDynamic = dynamic(() => import("./Merkliste"), {
    ssr: false,
    loading: () => <Loading />
})

export const MerklisteClientOnly = () => {
    return <MerklisteDynamic />
}