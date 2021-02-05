export default function PokemonInfo({ pokemon }) {
  return (
    <div>
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </div>
  )
}
