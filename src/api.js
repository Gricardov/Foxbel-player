export const request = async (route, method = 'GET', data) => {
    try {
        const result = await fetch(route, {
            method: method,
            body: data ? JSON.stringify(data) : null
        });
        if (result.status == '200') {
            return { data: await result.json() };
        } else {
            return { error: result.statusText || 'No se encontró el endpoint' };
        }
    } catch (error) {
        return { error };
    }
}