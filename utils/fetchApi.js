import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
    'X-RapidAPI-Key': 'a9d33885fbmshcf904a59b775d7ap1d1c99jsneed66fcc949c',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })

    return data
}