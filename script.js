const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


// Destructuring functions
const books = getBooks();
books;

const book = getBook(1);
// const title = book.title;
// const author = book.author;
const {title, author,pages,publicationDate,genres,hasMovieAdaptation} = book;
console.log(author,title,pages,publicationDate,genres,hasMovieAdaptation);
     // spred operator used for array and this below the syntax of the spred operator
const [primaryGenre ,...otherGenres] = genres;
console.log(primaryGenre, otherGenres);

const newGenres = [ 'epic, fantasy,',...genres]
newGenres;
// add new properties  overwrites existing properties
const upDatedBook = {...book,moviePublicationDate:'2001-12-22',pages:344};
upDatedBook;
// //Destructuring
// //
// // const title = book.title;

// // title;/
// // const {title,author,publicationDate,genres,hasMovieAdaptation} = book;
// // console.log(author,title,publicationDate,genres,hasMovieAdaptation);       

const summary = `${title} is a book ${4+2} with ${pages} written by ${author}`
summary;
// we used for 1000 + pages ternaries operator in javascript 
const pagesRange = pages > 1000 ? "Over a thousand pages" :"Less than a thousand pages";
pagesRange;

// arrow functions in js

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));


//short circuiting functions in js using && operator
const isNew = hasMovieAdaptation && "No";
isNew;

console.log(true && "some code is working");
console.log(false && "some code is working");


// 0 is used in the javascript for like as falsy values
// 1 is used in the javascript for like as truthy values

// && operator
// 1   1 = 1
// 1   0 = 0
// 0   1 = 0
// 0   0 = 0  

//or operator
// 1   1 = 1
// 1   0 = 1
// 0   1 = 1
// 0   0 = 0



// array map method in javascript 


const x = [1,2,3,4,5,6,7,].map((ele) => ele * 2);
console.log(x);

const essentialData  = books.map((book) => {
    return {
        title: book.title,
        author: book.author,
        pages: book.pages,
        publicationDate: getYear(book.publicationDate)
    }
});

essentialData;