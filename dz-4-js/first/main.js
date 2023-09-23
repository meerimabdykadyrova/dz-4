const cards = document.querySelector('.cards');

const fetchData = (url) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const people = JSON.parse(request.response);
            people.forEach(persons => {
                const person = document.createElement('div');
                person.setAttribute("class", "person-card");
                person.innerHTML = `
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="img">
                    <h4>NAME: ${persons.name}</h4>
                    <h4>SURNAME: ${persons.surname}</h4>
                    <span>AGE: ${persons.age} лет</span>
                `;
                cards.appendChild(person);
            });
        } else {
            console.error('Произошла ошибка при загрузке данных');
        }
    });
};

// Выполнить запрос на получение данных из data.json
fetchData('json/data.json');
