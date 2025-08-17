const listEl = document.querySelector('.list');

const updateUI = function(data) {
    listEl.innerHTML = "";

    data.forEach(tour => {
        let li = document.createElement('li');
        li.classList.add('item');
        let link = document.createElement('a');
        link.href = `./pages/about.html?id=${tour.id}`
        link.classList.add('link');
        li.append(link);
        let img = document.createElement('img');
        img.src = tour.image;
        img.alt = tour.title;
        let title = document.createElement('h2');
        title.textContent = tour.title.slice(0, 10);
        let desc = document.createElement('p');
        desc.textContent = tour.desc.slice(0, 10) + '...';

        link.append(img, title, desc);
        listEl.append(li);
    });
}

export default updateUI