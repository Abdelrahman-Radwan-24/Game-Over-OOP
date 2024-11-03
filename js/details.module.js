import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("gamesDetails").classList.add("d-none");
      document.getElementById("gamesHome").classList.remove("d-none");
    });
    this.loading = document.querySelector(".loading");
    this.ui = new Ui();
    this.getDetails(id);
  }

  async getDetails(id) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ad18bbdf3dmshe55c1da6a6f9dc6p1e89b5jsn2a3c10100ac1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add("d-none");
    this.ui.diaplayDetails(response);
  }
}
