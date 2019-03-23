import axios from 'axios'
import DataLoader from 'dataloader'

const UrlLoader = new DataLoader(urls => 
    Promise.all(urls.map(getFromUrl)),
);
const getFromUrl = async (url) => {
    return await axios(url)
}

export default {
  Person: {
    homeworld: async ({ homeworld }, args, context, info) => {
      console.log(homeworld)
      const { data } = await axios(homeworld)
      return data
    },
    species: ({ species }, args, context, info) => {
      console.log(species)
      const res = species.map(async s => {
        const { data } = await axios(s)
        return data
      })
      return res
      
    },
    films: async ({ films }, args, context, info) => {
      console.log('films', films)
      const res = films.map(async f => {
        const { data } = await axios(f)
        return data
      })
      return res
    }
  },
  Query: {
    people: async (parent, { url }, context, info) => {
      console.log(url)
      const test = [].map(x => x)
      const { data } = await axios(url)
      return data
    },
    planetSearch: async (parent, { url }, context, info) => {
      const { data } = await axios(url)

      console.log('new call')
      
      //this map should return an [[Residents], [Residents], [Residents]] etc....
      const res = await Promise.all(data.results.map(async planet => {
        const residents = await Promise.all(planet.residents.map(async (r) => {
          const person = await axios(r);
          return person.data
        }));
        return residents
      }))

      //looking good now but need to flatten the array
      const results = [].concat.apply([], res);

      console.log(results)
      return {
        ...data,
        results
      }
    },
    speciesSearch: async (parent, { url }, context, info) => {
      const { data } = await axios(url)

      console.log('new call')
      
      //this map should return an [[Residents], [Residents], [Residents]] etc....
      const res = await Promise.all(data.results.map(async species => {
        const people = await Promise.all(species.people.map(async (p) => {
          const person = await axios(p);
          return person.data
        }));
        return people
      }))

      //looking good now but need to flatten the array
      const results = [].concat.apply([], res);

      console.log(results)
      return {
        ...data,
        results
      }
    }
  }

}