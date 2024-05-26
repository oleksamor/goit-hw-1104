// функції для HTTP-запитів.

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".forma");
const container = document.querySelector(".list-gallery");

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43441081-c9c9daac9af91d4227dda2db1';

const options = new URLSearchParams({
    key: KEY,
    q: "car",// тут поставити те що ввів користувач у інпуті
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });


function fetchData(url = BASE_URL, options = {}) {
    return fetch(url, options)
        .then(
            response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
        }
    )
}

fetchData(`${BASE_URL}?${options}`)
    .then(data =>
            container.insertAdjacentHTML("beforeend", createMarkup(data.hits)))
    .catch(error => console.log(error))

function createMarkup(arr) {
    return arr.map(({
        id,
        tags,
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
    }) => `
        <li class = "list__item" data-id = "${id}">
       
        <img  class = "gallery-image" src="${webformatURL}" alt = "${tags}"/>
        
            <div class = "wrapper">

                <ul class ="wrapper-info ">
                    <li class = "likes">
                    <p class ="title">Likes</p>
                    <p class = "info">${likes}</p>
                    </li>
                    <li class = "views">
                    <p class ="title">Views</p>
                    <p class = "info">${views}</p>
                    </li>
                    <li class = "comments">
                    <p class ="title">Comments</p>
                    <p class = "info">${comments}</p>
                    </li>
                    <li class = "downloads">
                    <p class ="title">Downloads</p>
                    <p class = "info">${downloads}</p>
                    </li>
                 
                </ul>
            </div>
        </li>
`).join("");
}
