import Link from 'next/link'
import React from 'react'
import Pokemon from '../../features/pokemon/Pokemon'

export default function PokemonPage() {
    return (
        <div className="container md:mx-32 lg:mx-60">
            <h1 className="mt-20 text-xl font-bold">RTQ Query example</h1>
            <Pokemon name="bulbasaur" />
            <Pokemon name="pikachu" />
            <Pokemon name="ditto" />

            <Link href="/">
                <a className="text-blue-500 underline">Home Page</a>
            </Link>
        </div>
    )
}
