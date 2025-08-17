let url = "https://json-api.uz/api/project/tours/tours";

async function postData(obj) {
    let data = null;
    let error = null;
    try {
        let resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        });
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

export default postData;