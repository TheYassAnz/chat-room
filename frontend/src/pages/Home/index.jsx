import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import FormNewRoom from '../../components/FormNewRoom';

import axios from "axios";
function Home() {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const [text, setText] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/api/rooms')
                .then((response) => response.json())
                .catch((error) => console.error(error))

            setRooms(response)
        }
        fetchData()
    }, [text])

    function handleClick(event, room) {
        event.preventDefault();
        console.log(`Discuter sur ${room.code}`)
        navigate(`/room/${room.code}`)
    }
    function handleSubmit(event) {
        setText('');
        event.preventDefault();
        text != '' && console.log(text)
        const postData = async () => {
            await axios.post('http://localhost:8000/api/rooms/', { name: text })
                .then((response) => console.log(response))
                .catch((error) => console.error(error.status))
        }
        postData();
    }


    return (
        <>
            <div className="xl:mx-96 md:mx-56 sm:mx-32 mx-8 mt-12">
                <h2 className="font-bold">Active Rooms</h2>
                <ul role="list" className="divide-y divide-gray-100">
                    {rooms.length ? rooms.map((room) => (
                        <li key={room.code} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="flex-shrink-0">
                                    <ChatBubbleLeftIcon className="h-8 w-8 text-black" aria-hidden="true" />
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{room.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Code : {room.code}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                {/* <p className="text-sm leading-6 text-gray-900">{person.role}</p> */}
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    {/* Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time> */}
                                </p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <button onClick={(e) => handleClick(e, room)} type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Discuss</button>
                                </div>
                            </div>
                        </li>
                    )) : <span>No actives rooms yet...</span>}
                </ul>

                {/* New Rooms Form */}
                <FormNewRoom handleSubmit={handleSubmit} text={text} setText={setText} />
            </div >
        </>
    )
}

export default Home
