const url = "http://localhost:3333/games"
const postContainer = document.querySelector(".container__games")
const buttonShow = document.querySelector(".abrir")
const buttonClose = document.querySelector(".fechar")
const buttonSubmit = document.querySelector(".submit")

const modal = document.querySelector("dialog")


async function get() {
    const response = await fetch(url)

    console.log(response)

    const data = await response.json()

    console.log(data)

    data.map((game) => {
        const a = document.createElement("a")
        const div = document.createElement("div")
        const img = document.createElement("img")
        const title = document.createElement("strong")
        const span = document.createElement("span")

        a.setAttribute("href", '#')
        a.setAttribute("class", "ancora")
        div.setAttribute("class", "info")

        img.setAttribute("src", `${game.bannerUrl}`)


        title.innerText = game.title
        span.innerText = `${game._count.ads} Anúncio (s)`
        
        div.appendChild(title)
        div.appendChild(span)
        
        a.appendChild(img)
        a.appendChild(div)


        postContainer.appendChild(a)

    })
}

get()


buttonShow.onclick = function() {
    modal.showModal()
}

buttonClose.onclick = function() {
    modal.close()
}


buttonClose.addEventListener("click", (e) =>{
    e.preventDefault();
})

buttonSubmit.addEventListener("click", (e) =>{
    e.preventDefault();
})