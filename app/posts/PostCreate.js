"use client"

import {useState} from "react";


export default function PostCreate() {
    const [title, setTitle] = useState();
    const onSubmit = async (event) => {
        event.preventDefault();
        await fetch("http://localhost:4000", {

            method: 'POST',
            body: title
        })
        setTitle("");
    }
    return (
        <form
            onSubmit={onSubmit}
            className="container mx-auto">
            <div className="mb-1 flex flex-col gap-6">
                <label className="text-base font-semibold leading-7 text-gray-900">Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </form>
    )
}