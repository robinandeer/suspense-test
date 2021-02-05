import PokemonInfo from "./pokemon-info"

export default function PokemonInfoResource({ resource }) {
  const pokemon = resource.read()
  return <PokemonInfo pokemon={pokemon} />
}