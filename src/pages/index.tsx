import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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

                <div className="mt-20 text-center">
                    <Link href="/anotherPage">
                        <a className="text-blue-400 underline">Another Page</a>
                    </Link>{' '}
                    should share global state
                </div>
            </header>
        </div>
    )
}

export default IndexPage
