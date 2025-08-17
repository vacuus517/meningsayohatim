let url = "https://json-api.uz/api/project/tours/tours";

async function getData(params = "") {
    let data = null;
    let error = null;
    try {
        let resp = await fetch(url + "/" + params);
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        let result = await resp.json()
        data = result
    } catch (err) {
        error = err.message
    }

    return { data, error }
}

export default getData;