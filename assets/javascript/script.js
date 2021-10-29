const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function () {
    const searchInput = document.querySelector(".search-input").value;

    const movies = await geData(searchInput);
    moviesCard(movies);
});

const geData = async function (searchInput) {
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
                                <button type="button" class="btn btn-primary details-btn" data-id="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>`;
    });
    cardContainer.innerHTML = cards;
}

document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("details-btn")) {
        const movie = await movieDetails(e.target.dataset.id);

        movieModal(movie);
    }
});

const movieDetails = async function (id) {
    const response = await fetch("http://www.omdbapi.com/?apikey=666c83eb&i=" + id);
    const data = await response.json();
    return data;
}

const movieModal = function (movie) {
    const modal = document.querySelector(".modal-dialog");
    modal.innerHTML = `<div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h1>${movie.Title}</h1>
                            </div>
                        </div>`;
}