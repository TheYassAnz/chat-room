// eslint-disable-next-line react/prop-types
function FormNewRoom({ handleSubmit, text, setText }) {
    return (
        <>
            <h2 className="font-bold mt-12">Create a New Room</h2>
            <form className="mt-2 space-y-6" action="#" method="POST" onSubmit={e => handleSubmit(e)}>
                <div className='flex gap-x-3'>
                    <label htmlFor="name" className="basis-1/3 block text-sm font-medium text-gray-900 py-3">Name of the room : </label>
                    <input type="text" name="name" id="name" autoComplete="name" className="block basis-2/3 rounded-md border-0 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={text} onChange={e => setText(e.target.value)} />
                </div>
                <div className='flex justify-center'>

                    <input type="submit" value="Create" className="block rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" />

                </div>
            </form>
        </>
    )
}

export default FormNewRoom