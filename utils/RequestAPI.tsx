import axios, { Method } from "axios";

export const RequestImage = async (src: string): Promise<any> => {
    const image = await RequestApi('get', '/image/' + src);
    return image;
}

export const PostImage = async (image: any): Promise<any> => {
    const imageForm: FormData = new FormData();
    imageForm.append('file', image)

    const response = await RequestApi('post', '/upload', imageForm);
    return response;
}


export const RequestApi = async (request: Method, endpoint: string, body: any = undefined, accessToken = '') => {

    let tempResponse;

    await axios({
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        method: request,
        url: 'http://localhost:3000/' + endpoint,
        data: body,
    })
    .then(response => {
        tempResponse = response.data;
    })
    .catch(error => {
        console.log(error);
    });
    return tempResponse;
};