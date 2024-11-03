export class Ui {
  constructor() {}

  displayGames(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
    
         <div class="col-md-6 col-lg-4 col-xl-3 my-3 ">
            <div data-id="${
              data[i].id
            }" role="button" class="card h-100 bg-transparent">
              <div class="card-body">
                <figure>
                  <img
                    class="card-img-top object-fit-cover"
                    src="${data[i].thumbnail}"
                    alt="${data[i].title}"
                  />
                </figure>
                <figcaption>
                  <div class="hstack justify-content-between">
                    <h3 class="h6 small">${data[i].title}</h3>
                    <span class="small badge text-bg-primary py-2">free</span>
                  </div>
                  <p class="card-text small text-center opacity-50">
                    ${data[i].short_description.split(" ", 8)}
                  </p>
                </figcaption>
              </div>

              <footer class="card-footer small hstack justify-content-between">
                <span class="badge badge-color">${data[i].genre}</span>
                <span class="badge badge-color"> ${data[i].platform}</span>
              </footer>
            </div>
          </div>
    `;
    }

    document.getElementById("gamesData").innerHTML = gamesBox;
  }

  diaplayDetails(dataDetails) {
    let detailsBox = `
    
         <div class="col-md-4 my-3">
            <img
              class="w-100"
              src="${dataDetails.thumbnail}"
              alt="${dataDetails.title}"
            />
          </div>

          <div class="col-md-8">
            <h3>${dataDetails.title}</h3>
            <p>
              Category :
              <span class="badge text-bg-info">${dataDetails.genre}</span>
            </p>
            <p>
              Platform :
              <span class="badge text-bg-info">${dataDetails.platform}</span>
            </p>
            <p>
              Status :
              <span class="badge text-bg-info">${dataDetails.status}</span>
            </p>
            <p class="small">
            ${dataDetails.description}
            </p>
            <a
              target="_blank"
              href="${dataDetails.game_url}"
              class="btn btn-outline-warning text-light"
              >Show Game</a
            >
          </div>
    
    
    `;

    document.getElementById("detailsData").innerHTML = detailsBox;
  }
}
