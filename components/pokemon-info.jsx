import styles from './pokemon-info.module.css'

export default function PokemonInfo({ pokemon }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={pokemon.sprites.other['official-artwork'].front_default}
        with="256"
        height="256"
        alt={pokemon.name}
      />
      <div className={styles.separator} />
      <h1 className={styles.name}>{pokemon.name}</h1>
    </div>
  )
}
