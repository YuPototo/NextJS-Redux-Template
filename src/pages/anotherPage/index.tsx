import Link from 'next/link'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { increment } from '../../features/counter/counterSlice'

export default function About() {
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.counter.value)

    return (
        <div className="container md:mx-32 lg:mx-60">
            <h1 className="mt-20 text-xl font-bold">Anther Page</h1>
            <div className="my-8">
                count value is{' '}
                <span className="text-lg text-blue-500">{count}</span>
            </div>

            <div className="my-10 flex gap-5">
                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    onClick={() => dispatch(increment())}
                >
                    - 1
                </button>

                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    onClick={() => dispatch(increment())}
                >
                    + 1
                </button>
            </div>

            <Link href="/">
                <a className="text-blue-500 underline">To Home Page</a>
            </Link>
        </div>
    )
}
