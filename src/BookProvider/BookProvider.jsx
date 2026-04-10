import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const BookContext = createContext()
const BookProvider = ({children}) => {
    const [storeBook, setStoreBook] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const handleReadBtn = (currentBook) => {
        const isInWishlist = wishlist.find(book => book.bookId === Number(currentBook.bookId));
        if(isInWishlist) {
            toast.error(`${currentBook.bookName} is Already in Wishlist`)
            return;
        }
    const findBook = storeBook.find(book => book.bookId === currentBook.bookId);
    if (findBook) {
        toast.error(`${currentBook.bookName} is Already Exist in Real list`);
        return;
    }

    setStoreBook([...storeBook, currentBook]);
    toast.success(`${currentBook.bookName} added In the Read`);
    return
}
    const handleWishlistBtn = (currentBook) => {
        const isInReadList = storeBook.find(book => book.bookId === Number(currentBook.bookId));
        if (isInReadList) {
            toast.error(`${currentBook.bookName} is Already Exist in Read list`)
            return;
        }
    const findBook = wishlist.find(book => book.bookId === currentBook.bookId);

    if (findBook) {
        toast.error(`${currentBook.bookName} is Already Exist in Wishlist`);
        return;
    }

    setWishlist([...wishlist, currentBook]);
    toast.success(`${currentBook.bookName} added In the Wishlist`);
    return
}
const data = {
    storeBook,
    setStoreBook,
    handleReadBtn,
    handleWishlistBtn,
    wishlist,
    setWishlist
}
    return (
       <BookContext.Provider value={data}>
        {children}
       </BookContext.Provider>
    );
};

export default BookProvider;