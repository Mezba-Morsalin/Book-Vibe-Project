import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import '../../App.css'
import  { Toaster } from 'react-hot-toast';
import { BookContext } from '../../BookProvider/BookProvider';

const BookDetails = () => {
    const {bookId} = useParams();
    const bookData = useLoaderData()
    const expectBook = bookData.find(book => book.bookId === Number(bookId));
    const {handleReadBtn, handleWishlistBtn,} = useContext(BookContext)
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-18 '>
            <div className='flex flex-col lg:flex-row gap-12'>
                <div className='bg-base-300 rounded-2xl p-20'>
                <img className='w-[400px] mx-auto' src={expectBook.image} alt={expectBook.image} />
            </div>
            <div className='w-full space-y-5'>
                <h2 className='text-4xl font-semibold'>{expectBook.bookName}</h2>
                <p>By : {expectBook.author}</p>
                <div className='border-t border-b border-gray-300 p-3'>
                    <p className='custom-font font-bold'>{expectBook.category}</p>
                </div>
                <p><span className='font-bold custom-font'>Review : </span>{expectBook.review}</p>
                <div className='flex gap-4 items-center border-b border-gray-300 p-5'><span className='font-bold custom-font'>Tag</span>
                {expectBook.tags.map((tag, index) => (
                <div key={index} className='bg-green-50 text-green-500 rounded-2xl p-3 font-bold'>#{tag}
                </div>
            ))}
            </div>
            <div className='flex justify-between w-full md:w-[400px]'>
                <p className='custom-font'>Number of Pages :</p>
                <p className='font-bold custom-font'>{expectBook.totalPages}</p>
            </div>
            <div className='flex justify-between w-full md:w-[400px]'>
                <p className='custom-font'>Publisher :</p>
                <p className='font-bold custom-font'>{expectBook.publisher}</p>
            </div>
            <div className='flex justify-between w-full md:w-[400px]'>
                <p className='custom-font'>Year of Publishing :</p>
                <p className='font-bold custom-font'>{expectBook.yearOfPublishing}</p>
            </div>
            <div className='flex justify-between w-full md:w-[400px]'>
                <p className='custom-font'>Rating :</p>
                <p className='font-bold custom-font'>{expectBook.rating}</p>
            </div>
            <div className='flex gap-5'>
                <button onClick={() => handleReadBtn(expectBook)} className='rounded-xl px-4 py-2 border border-gray-900 font-bold hover:bg-cyan-600 hover:text-white transition duration-300 hover:border-none cursor-pointer'>Read</button>
                <button onClick={() =>handleWishlistBtn(expectBook)} className='rounded-xl px-4 py-2 bg-cyan-600 text-white font-bold  hover:bg-white hover:text-black transition duration-300 hover:border hover:border-gray-900'>Wishlist</button>
            </div>
            </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default BookDetails;