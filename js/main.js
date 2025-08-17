// elements

const formEl = document.querySelector('.form');

// links
import getData from "./getData.js";
import postData from "./postData.js";
import updateUI from "./update.js";

let { data, error } = await getData();

updateUI(data.data)


formEl.addEventListener('submit', async function (e) {
    e.preventDefault()

    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)

    let posted = await postData(data);
    formEl.reset();

    (async () => {
        let { data, error } = await getData();
        updateUI(data.data)
    })()
})