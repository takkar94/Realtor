import axios from 'axios'; 

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '44d2f5e906mshf8541cc52471a67p1ab222jsnedf8b9a326b9'
        }
    })

    return data;
}