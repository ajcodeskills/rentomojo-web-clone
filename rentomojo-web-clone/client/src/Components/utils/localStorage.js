export const setUser = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
}
export const getUser = (name) => {
    //return localStorage.getItem(name)
    try {
        let data = localStorage.getItem(name);
        data = JSON.parse(data);
        return data;
    }
    catch (err) {
        return undefined;
    }
}
