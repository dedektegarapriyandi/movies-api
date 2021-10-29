const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function () {
    const searchInput = document.querySelector(".search-input").value;

    const movies = await getAPI(searchInput);
    movies.forEach(movie => {
        console.log(movie);
    });
});

const getAPI = function (searchInput) {
    return fetch("http://www.omdbapi.com/?apikey=666c83eb&s=" + searchInput)
        .then(response => response.json())
        .then(data => data.Search);
}

