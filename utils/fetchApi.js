import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'dade6f0b95msh675fe47194662ebp104ea9jsn4bd01682e474',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}