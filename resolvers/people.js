import axios from 'axios'
import DataLoader from 'dataloader'
import { getCategory } from '../helpers/getCategoryFromUrl'

const UrlLoader = new DataLoader(urls => 
    Promise.all(urls.map(getFromUrl)),
);
const getFromUrl = async (url) => {
    return await axios(url)
}

export default {
  Person: {
    homeworld: async ({ homeworld }, args, context, info) => {
      const { data } = await UrlLoader.load(homeworld)
      return data
    },
    species: ({ species }, args, context, info) => {
      const res = species.map(async s => {
        const { data } = await UrlLoader.load(s)
        return data
      })
      return res
      
    },
    films: async ({ films }, args, context, info) => {
      const res = films.map(async f => {
        const { data } = await UrlLoader.load(f)
        return data
      })
      return res
    }
  },
  Query: {
    people: async (parent, { url }, context, info) => {
      const { data } = await UrlLoader.load(url)

      const category = getCategory(url)

      if (category === "people" ) {
        return data
      }

      const people = category === "planets" ? "residents" : "people" 
      
      const res = await Promise.all(data.results.map(async categoryRes => {
        const residents = await Promise.all(categoryRes[people].map(async (p) => {
          const person = await UrlLoader.load(p);
          return person.data
        }));
        return residents
      }))

      const results = [].concat.apply([], res);

      return {
        ...data,
        results
      }
    },
  }

}