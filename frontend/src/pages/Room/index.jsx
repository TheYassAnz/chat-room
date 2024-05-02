import { useParams } from "react-router-dom"
export default function Room() {
    // Get the code parameter from the URL
    const { code } = useParams()
    return (
        <>
            <div className="xl:mx-96 md:mx-56 sm:mx-32 mx-8 mt-12">
                <h1 className="text-2xl font-semibold text-gray-900 text-center">Room {code}</h1>
            </div>
        </>
    )
}