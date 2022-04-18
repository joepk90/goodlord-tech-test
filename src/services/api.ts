const BASE_URL = 'https://ref-api.goodlord.co'
const ROUTE = 'reference'

const getEndpoint = () => {
    return `${BASE_URL}/${ROUTE}`
}

// const get = () => {}
// const put = () => {}
// const delete = () => {}


const post = async (body: any) => {

    const endpoint = getEndpoint();

    try {
        const response = await fetch(`${endpoint}/new`, {
            method: 'post',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

        const updatedResponse = {
            ...response,
            data: await response.json()
        }

        return updatedResponse;

    } catch (error) {
        console.log(error);
    }
}

export default {
    post
}