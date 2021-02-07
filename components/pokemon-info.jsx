import styles from '../styles/pokemon-info.module.css'

export default function PokemonInfo({ pokemon }) {
  return (
    <div className={styles.container}>
      <img src={pokemon.sprites.other['official-artwork'].front_default} with="475" height="475" alt={pokemon.name} />
      <div className={styles.separator} />
      <h1 className={styles.name}>{pokemon.name}</h1>
    </div>
  )
}
