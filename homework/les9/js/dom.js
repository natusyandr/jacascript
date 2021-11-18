"use strict";

let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];
let booksSection = document.querySelector(".books-section");
function addBooks(booksArr, element){
  for (let item of booksArr) {
    let booksSection = document.createElement('div');
    let itemTitle = document.createElement('h2');
    itemTitle.innerText = item.genreName;

    let books = document.createElement('div');
    books.classList.add('books');
    booksSection.append(itemTitle, books);
    for (let book of item.books){
      let article = document.createElement('article');
      article.innerHTML = `
      <span>${book.title}</span>
      <img src="${book.img}">
      <p>${book.description}</p>
      <a>Читать</a>`
      books.append(article);
    }
    document.body.append(booksSection);
  }
};
addBooks(booksByGenre, booksSection);
    // перебор booksArr:
        // создать div
        // создать h2
        // создать div class="books"
        // добавить h2 и div class="books" в div
        // перебор booksArr.books
            // создать article, добавить содержимое через innerHTML
            // добавить article в div
