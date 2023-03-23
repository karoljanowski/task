import newsData from "./newsData"
export function news(element) {
    for (let news of newsData) {
        element.innerHTML +=
            `<article class="news__article">
        <img src=${news.img} class="news__image">
        <span class="news__date"><i class="fa-solid fa-calendar-days"></i>${news.date}</span>
        <span class="news__category"><i class="fa-solid fa-folder-open"></i>${news.category}</span>
        <h3 class="news__title">${news.title}</h3>
        <a href="#" class="news__read">Czytaj dalej</a>
      </article>`
    }
}