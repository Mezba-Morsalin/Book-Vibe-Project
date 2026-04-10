import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../App.css'
import ReadBooks from './ReadBooks';
import Wishlist from './Wishlist';

const Books = () => {
    const {storeBook, wishlist} = useContext(BookContext)
    return (
        <div className='mt-24 w-11/12 lg:w-10/12 mx-auto'>
            <Tabs>
    <TabList>
      <Tab><span className='custom-font font-bold'>Read List ({storeBook.length})</span></Tab>
      <Tab><span className='custom-font font-bold'>Wish List ({wishlist.length})</span></Tab>
    </TabList>

    <TabPanel>
      {storeBook.length === 0 ? 
            <div className='mt-10 bg-base-300 rounded-2xl flex justify-center items-center h-[60vh]'>
                <p className='font-bold custom-font text-3xl'>No Read List Book Found</p>
            </div> : <div className='mt-10 space-y-4'>
        {
            storeBook.map((book, index) => <ReadBooks key={index} book = {book}></ReadBooks>)
        }
      </div>}
    </TabPanel>
    <TabPanel>
      {wishlist.length === 0 ? 
            <div className='mt-10 bg-base-300 rounded-2xl flex justify-center items-center h-[60vh]'>
                <p className='font-bold custom-font text-3xl'>No Wish List Book Found</p>
            </div> : <div className='mt-10 space-y-4'>
        {
            wishlist.map((book, index) => <Wishlist key={index} book = {book}></Wishlist>)
        }
      </div>}
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;