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
  
  Query: {
    planets: async (parent, { url }, context, info) => {
      const { data } = await UrlLoader.load(url)
      console.log(data)
      return data
    },
  }

}