import getData from "./getData.js";
import deleteData from "./delete.js";

const params = new URLSearchParams(window.location.search);
let result = params.get("id");
let { data, error } = await getData(result);

const titleEl = document.createElement("h1");
const ImgEl = document.createElement("img");
const descEl = document.createElement("p");
const container = document.querySelector(".container");
const btnwrapper = document.createElement("div");
const deletBtn = document.createElement("button");
const uptadeBtn = document.createElement("button");

titleEl.textContent = data.title;
titleEl.id = "title";
ImgEl.src = data.image;
ImgEl.alt = data.title;
ImgEl.id = "image";
descEl.textContent = data.desc;
descEl.id = "descFirst";
btnwrapper.classList.add("btn-wrapper");
deletBtn.textContent = "Delete";
deletBtn.classList.add("delet-btn");






deletBtn.addEventListener("click", async function () {
    let deltedData = await deleteData(result);
    window.location.href = "../index.html";
});

btnwrapper.append(deletBtn);
container.append(titleEl, ImgEl, descEl, btnwrapper);