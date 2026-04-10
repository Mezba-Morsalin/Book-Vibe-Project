import React from 'react';
import '../../App.css'
import { IoDocumentTextOutline, IoLocationOutline } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router';

const Wishlist = ({book}) => {
    return (
        <div className='border border-gray-300 rounded-2xl p-5'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div>
                    <img 
                        className=' mx-auto w-50 object-cover bg-base-300 rounded-2xl p-6' 
                        src={book.image} 
                        alt={book.bookName} 
                    />
                </div>
                <div className='space-y-3'>
                    <h2 className='text-2xl font-bold'>{book.bookName}</h2>
                    <p className='custom-font'>By : {book.author}</p>

                    <div className='flex gap-4 items-center flex-wrap'>
                        <span className='font-bold custom-font'>Tag</span>
                        {book.tags?.map((tag, index) => (
                            <div key={index} className='bg-green-50 text-green-500 rounded-2xl px-3 py-1 font-bold custom-font'>
                                #{tag}
                            </div>
                        ))}
                        <div>
                            <p className='custom-font flex items-center gap-2'>
                                <IoLocationOutline/> Year of Published : {book.yearOfPublishing}
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-8 border-b border-gray-300 py-4'>
                        <p className='custom-font flex items-center gap-2'>
                            <BsPersonCircle/>Publisher : {book.publisher}
                        </p>
                        <p className='custom-font flex items-center gap-2'>
                            <IoDocumentTextOutline/>Pages : {book.totalPages}
                        </p>
                    </div>

                    <div className='flex flex-wrap md:flex-nowrap gap-3 mt-8'>
                        <p className='custom-font p-2 rounded-full bg-indigo-100 text-indigo-500 font-bold'>
                            Category : {book.category}
                        </p>
                        <p className='custom-font p-2 rounded-full bg-orange-100 text-orange-500 font-bold'>
                            Rating : {book.rating}
                        </p>
                        <Link 
                            to={`/bookDetails/${book.bookId}`} 
                            className='custom-font bg-green-500 text-white p-2 rounded-full'
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;