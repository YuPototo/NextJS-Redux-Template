import React from 'react'
import { useGetPokemonByNameQuery } from '../../app/api'
import Image from 'next/image'

type Props = {
    name: string
}

export default function Pokemon({ name }: Props) {
    const { data, error, isLoading } = useGetPokemonByNameQuery(name)

    return (
        <div className="mt-5">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.species.name}</h3>
                    <Image
                        width={100}
                        height={100}
                        src={data.sprites.front_shiny}
                        alt={data.species.name}
                    />
                </>
            ) : null}
        </div>
    )
}
