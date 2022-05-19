import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from './counterSlice'
// import styles from './Counter.module.css'

function Counter() {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <div className="mt-10 text-lg">
            <div className="mt-15 flex justify-center">
                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className="mx-5 text-2xl text-blue-500">{count}</span>
                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className="mt-10 flex justify-center gap-4">
                <input
                    className="w-16 rounded border-2 p-1 text-center"
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async
                </button>
                <button
                    className="cursor-pointer border-2 border-solid border-blue-100 bg-blue-100 px-3 py-1 text-lg hover:bg-blue-200"
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    )
}

export default Counter
