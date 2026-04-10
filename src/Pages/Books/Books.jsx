import React, { useContext, useState } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../App.css'
import ReadBooks from './ReadBooks';
import Wishlist from './Wishlist';

const Books = () => {
    const {storeBook, wishlist} = useContext(BookContext)
    const [sort, setSort] = useState('')
    let sortedStoreBook = [...storeBook];

    if (sort === 'pages') {
        sortedStoreBook.sort((a, b) => a.totalPages - b.totalPages);
    }

    if (sort === 'rating') {
        sortedStoreBook.sort((a, b) => b.rating - a.rating);
    }
    let sortedWishlist = [...wishlist];

    if (sort === 'pages') {
        sortedWishlist.sort((a, b) => a.totalPages - b.totalPages);
    }

    if (sort === 'rating') {
        sortedWishlist.sort((a, b) => b.rating - a.rating);
    }

    return (
        <div className='mt-24 w-11/12 lg:w-10/12 mx-auto'>
            <div className="dropdown dropdown-bottom dropdown-center flex justify-center items-center mb-12">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort By : {sort || 'Default'} ⬇️
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> setSort('pages')}><a>Pages</a></li>
                    <li onClick={()=> setSort('rating')}><a>Rating</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>
                        <span className='custom-font font-bold'>
                            Read List ({storeBook.length})
                        </span>
                    </Tab>
                    <Tab>
                        <span className='custom-font font-bold'>
                            Wish List ({wishlist.length})
                        </span>
                    </Tab>
                </TabList>
                <TabPanel>
                    {storeBook.length === 0 ? 
                        <div className='mt-10 bg-base-300 rounded-2xl flex justify-center items-center h-[60vh]'>
                            <p className='font-bold custom-font text-3xl'>
                                No Read List Book Found
                            </p>
                        </div> 
                    : 
                        <div className='mt-10 space-y-4'>
                            {
                                sortedStoreBook.map((book, index) => (
                                    <ReadBooks key={index} book={book} />
                                ))
                            }
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {wishlist.length === 0 ? 
                        <div className='mt-10 bg-base-300 rounded-2xl flex justify-center items-center h-[60vh]'>
                            <p className='font-bold custom-font text-3xl'>
                                No Wish List Book Found
                            </p>
                        </div> 
                    : 
                        <div className='mt-10 space-y-4'>
                            {
                                sortedWishlist.map((book, index) => (
                                    <Wishlist key={index} book={book} />
                                ))
                            }
                        </div>
                    }
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Books;