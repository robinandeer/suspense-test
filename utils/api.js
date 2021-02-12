const BASE_URL = 'https://pokeapi.co/api/v2'

function delay(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

export const API = {
  async fetchPokemon(name) {
    await delay() // artificially delay response
    const response = await fetch(`${BASE_URL}/pokemon/${name}`)
    return await response.json()
  },
}

export function createResource(promise) {
  let result
  let status = 'pending'

  promise.then((data) => {
    status = 'success'
    result = data
  })

  return {
    read() {
      if (status === 'pending') throw promise
      return result
    },
  }
}
