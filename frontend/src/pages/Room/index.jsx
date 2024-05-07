import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
export default function Room() {
    const { code } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8000/api/rooms/${code}`)
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => console.error(error))
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="xl:mx-96 md:mx-56 sm:mx-32 mx-8 mt-12">
                <h1 className="text-2xl text-gray-900 text-center">Welcome to the room <span className="font-bold">{data.code}</span> !</h1>
            </div>
        </>
    )
}