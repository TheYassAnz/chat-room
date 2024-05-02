import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const rooms = [
        {
            code: 'HSS3KSL',
            name: 'Room 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            code: 'HSKBD3SL',
            name: 'Room 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        },
        {
            code: 'HZ80SKSL',
            name: 'Room 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        },
        {
            code: 'HSK093SL',
            name: 'Room 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        },
        {
            code: 'H379KSL',
            name: 'Room 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

        },]

    function handleClick(event, room) {
        event.preventDefault();
        console.log(`Discuter sur ${room.code}`)
        navigate(`/room/${room.code}`)
    }

    return (
        <>
            <div className="xl:mx-96 md:mx-56 sm:mx-32 mx-8 mt-12">
                <ul role="list" className="divide-y divide-gray-100">
                    {rooms.map((room) => (
                        <li key={room.code} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>

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
                                    <button onClick={(e) => handleClick(e, room)} type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Discuter</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home
