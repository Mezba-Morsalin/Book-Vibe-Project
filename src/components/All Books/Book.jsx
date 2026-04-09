import React from 'react';
import '../../App.css'
import { CiStar } from 'react-icons/ci';
const Book = ({book}) => {
    const {image, tags, bookName, author, category, rating} = book
    return (
        <div className='border border-gray-300 rounded-2xl p-6 space-y-3.5'>
            <div className='bg-base-300 rounded-2xl p-5'>
                <img className='w-38 h-50 mx-auto' src={image} alt={image} />
            </div>
            <div className='flex gap-4'>
                {tags.map((tag, index) => (
                <div key={index} className='bg-green-50 text-green-500 rounded-2xl p-3 font-bold'>{tag}
                </div>
            ))}
            </div>
            <h3 className='text-2xl font-bold'>{bookName}</h3>
            <p className='custom-font'>By : {author}</p>
            <div className='border-t border-dashed border-gray-300 flex justify-between'>
                <p className='custom-font mt-2.5'>{category}</p>
                <p className='custom-font mt-2.5 flex items-center gap-2'>{rating} <CiStar></CiStar></p>
            </div>
        </div>
    );
};

export default Book;