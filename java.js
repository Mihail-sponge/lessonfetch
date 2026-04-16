const form = document.querySelector ("form")
const name = document.querySelector ("#name")
const email = document.querySelector ("#email")

form.addEventListener ("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector ("#name").value.trim();
    const email = document.querySelector ("#email").value.trim();

    if (name === "") {
    alert ("Введите имя");
    }

    if (!email.includes("@")) {
    alert ("Введите корректный Email");
    }

    console.log("Вы успешно зарегистрировались:", name, email)
})

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
