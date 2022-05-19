import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Counter from '../features/counter/Counter'

const IndexPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="m-20">
                <div className="flex justify-center">
                    <Image
                        width="100"
                        height="100"
                        src="/logo.svg"
                        alt="logo"
                    />
                </div>
                <Counter />

                <div className="mt-10">
                    <span>Learn </span>
                    <a
                        className="text-gray-600 underline"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="text-gray-600 underline"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="text-gray-600 underline"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="text-gray-600 underline"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </div>
            </header>
        </div>
    )
}

export default IndexPage
