import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll(".menu .nav-link").forEach((link) =>
      link.addEventListener("click", () => {
        this.changeActiveLink(link);
        const category = link.dataset.category;
        this.getGames(category);
      })
    );

    this.ui = new Ui();

    this.loading = document.querySelector(".loading");
    this.gamesHome = document.getElementById("gamesHome");
    this.gamesDetails = document.getElementById("gamesDetails");
    this.getGames("mmorpg");
  }

  changeActiveLink(link) {
    document.querySelector(".menu .active").classList.remove("active");
    link.classList.add("active");
  }

  async getGames(category) {
    document.body.style.overflow = "hidden";
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ad18bbdf3dmshe55c1da6a6f9dc6p1e89b5jsn2a3c10100ac1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    document.body.style.overflow = "visible";
    this.loading.classList.add("d-none");
    this.ui.displayGames(response);

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.gamesHome.classList.add("d-none");
        this.gamesDetails.classList.remove("d-none");
        new Details(card.dataset.id);
      });
    });
  }
}
