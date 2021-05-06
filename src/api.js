import jsonp from 'jsonp';

export const requestDeezer = async (route) => {
    return new Promise((resolve, reject) => {
        jsonp(`${route}&output=jsonp`, { name: 'defaultName' }, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}