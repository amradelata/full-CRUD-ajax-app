
let texTarea = document.getElementById("text");
let button = document.getElementById("button");
let ul = document.getElementById("ul");
let API = "http://localhost:3000/tweets"


// console.log(ul)


button.addEventListener('click', () => {
    let obj = {
        body: texTarea.value
    }
    fetch(API, {
        method: 'post',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            ul.innerHTML += `
                <li>${data.body}</li>
            `;
            texTarea.value = ""
        });

})

fetch(API)
    .then(res => res.json())
    .then(data => {
        data.forEach(tweets => {
            let li = `
                    <li>${tweets.body}</li>
                    `
            ul.innerHTML += li;

        });
    })