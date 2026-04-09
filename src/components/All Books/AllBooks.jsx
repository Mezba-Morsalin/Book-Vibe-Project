import React, { use } from 'react';
import Book from './Book';

const dataPromise = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {
    const books = use(dataPromise)
    return (
        <section className='w-11/12 lg:w-10/12 mx-auto mt-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    books.map(book => <Book key={book.bookId} book = {book}></Book>)
                }
            </div>
        </section>
    );
};

export default AllBooks;