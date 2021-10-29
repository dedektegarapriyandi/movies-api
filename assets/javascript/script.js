const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function () {
    const searchInput = document.querySelector(".search-input").value;

    const movies = await getAPI(searchInput);
    moviesCard(movies);
});

const getAPI = async function (searchInput) {
    const response = await fetch("http://www.omdbapi.com/?apikey=666c83eb&s=" + searchInput);
    const data = await response.json();
    return data.Search;
}

const moviesCard = function (movies) {
    const cardContainer = document.querySelector(".card-container");
    let cards = '';
    movies.forEach((movie) => {
        cards += `<div class="col-md-4 my-4">
                        <div class="card">
                            <img src="${movie.Poster}" class="card-img-top" alt="poster">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <p class="card-text">${movie.Year}</p>
                                <p class="card-text">${movie.Type}</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>`;
    });
    cardContainer.innerHTML = cards;
}