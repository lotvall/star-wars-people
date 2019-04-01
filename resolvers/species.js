import axios from 'axios'
import DataLoader from 'dataloader'

const UrlLoader = new DataLoader(urls => 
    Promise.all(urls.map(getFromUrl)),
);
const getFromUrl = async (url) => {
    return await axios(url)
}

export default {
  
  Query: {
    species: async (parent, { url }, context, info) => {
      const { data } = await UrlLoader.load(url)
      return data
    },
  }

}