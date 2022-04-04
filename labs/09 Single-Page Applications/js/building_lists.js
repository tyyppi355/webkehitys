'use strict';
const request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
const data = JSON.parse(request.responseText);
console.log(data);

const books = data.books;
const table = document.createElement('table');
const headings = document.createElement('tr');
const name = document.createElement('th');
name.innerHTML = "Name";
const year = document.createElement('th');
year.innerHTML = "Year";

headings.appendChild(name);
headings.appendChild(year);
table.appendChild(headings);

for (let i = 0; i < books.length; i++) {
	const list = document.createElement('tr');
	for (let x = 0; x < 2; x++) {
		const item = document.createElement('td');
		if (x === 0) {
			item.innerHTML = books[i].title;
		}else{
			item.innerHTML = books[i].year;
		}

		list.appendChild(item);
	}
	table.appendChild(list);

}

document.body.appendChild(table);



