const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

function Generatejoke() {
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    fetch(url)
        .then(response => response.json())
        .then(item => {
            joke.innerHTML = `${item.joke}`;
        });
}
jokeBtn.addEventListener("click", Generatejoke);
Generatejoke();