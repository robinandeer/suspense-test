import React from 'react'
import { API, createResource } from '../utils/api'
import PokemonInfoResource from '../components/pokemon-info-resource'
import PokemonInfoSkeleton from '../components/pokemon-info-skeleton'
import Container from '../components/container'
import styles from '../styles/search.module.css'

const initialResource = createResource(API.fetchPokemon('pikachu'))

function PokemonSearchComponent() {
  const [pokemonResource, setPokemonResource] = React.useState(initialResource)
  const [pokemonName, setPokemonName] = React.useState('')

  function handleClick() {
    if (pokemonName) {
      setPokemonResource(createResource(API.fetchPokemon(pokemonName)))
    }
  }

  return (
    <Container back title="Level 4">
      <div className={styles.container}>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            placeholder="mewtwo"
            value={pokemonName}
            onChange={({ target: { value } }) => setPokemonName(value)}
          />
          <button className={styles.button} onClick={handleClick}>
            Search
          </button>
        </div>

        <React.Suspense fallback={<PokemonInfoSkeleton />}>
          <PokemonInfoResource resource={pokemonResource} />
        </React.Suspense>
      </div>
    </Container>
  )
}

export default function Level4() {
  return <PokemonSearchComponent />
}
