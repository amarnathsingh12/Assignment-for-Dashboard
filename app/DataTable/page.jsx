"use client"
import { useEffect, useState } from "react"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Loader2 } from "lucide-react"

async function getData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error fetching data:", error)
        return []
    }
}

export default function DemoPage() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        getData().then(data => {
            setData(data)
            setLoader(false)
        })
    }, [])


    return (
        <>
            {
                loader ? (
                    <div className="flex justify-center items-center h-screen w-full py-10">
                        <Loader2 className="animate-spin h-32 w-32 text-gray-500" />
                    </div>
                ) : (
                    <div className="h-full w-full py-10">
                        <DataTable columns={columns} data={data} />
                    </div>
                )
            }
        </>
    )
}