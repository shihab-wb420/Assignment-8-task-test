import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const ReadingContext = createContext();

export const ReadingProvider = ({ children }) => {
  const [elapsedTime, setElapsedTime] = useState(
    parseInt(localStorage.getItem('elapsedTime')) || 0
  );
  const [bookmarkedIds, setBookmarkedIds] = useState(
    JSON.parse(localStorage.getItem('bookmarkedIds')) || []
  );
 const [bookmarkNotification, setBookmarkNotification] = useState(null);
 
 // adding reading time and saving in localStorage
  const addReadingTime = (time) => {
    setElapsedTime((prevTime) => {
      const newTime = prevTime + time;
      localStorage.setItem('elapsedTime', newTime.toString());
      return newTime;
    });
  };
//delete total reading time from localStorage 
const deleteTotalReadingTime = () => {
    setElapsedTime(0);
    localStorage.removeItem('elapsedTime');
  };

// savings  bookmark on localstorage 
  const toggleBookmark = (blogId) => {
    if (!bookmarkedIds.includes(blogId)) {
      setBookmarkedIds((prevIds) => [...prevIds, blogId]);
      localStorage.setItem('bookmarkedIds', JSON.stringify([...bookmarkedIds, blogId])); 
      console.log("bookmarke added")
    } else { 
      toast("You already bookmarked this blog!",{
        duration: 3000,
        position: 'top-center',

        // Styling
        style: {
          fontSize:"23px",
          color:"green",
          fontWeight:"bold"
        },
      });
      
      console.warn('Blog already bookmarked!');
    }
  };
  
  
   const showBookmarkNotification = (blogTitle) => {
    setBookmarkNotification({ blogTitle });
    setTimeout(() => {
      hideBookmarkNotification();
    }, 5000); // Adjust the duration as needed (in milliseconds)
  };

  const hideBookmarkNotification = () => {
    setBookmarkNotification(null);
  };

  
//delete all bookMark 
const deleteAllBookmarks = () => {
    setBookmarkedIds([]);
    localStorage.removeItem('bookmarkedIds');
  };


 // returning true or false that bookmark save or not by blog id 
  const isBlogBookmarked = (blogId) =>{ 
    return bookmarkedIds.includes(blogId);
  }
  
  // getting bookmarke length 
  const getBookmarkedLength = () =>{ 
   return bookmarkedIds.length;
  } 
  // getting total reafing time from localStorage by useState
  const getTotalReadingTime = () => elapsedTime; 
  
  return (
    <ReadingContext.Provider
      value={{ 
      addReadingTime, 
      toggleBookmark,
      isBlogBookmarked,
      getBookmarkedLength, 
      getTotalReadingTime,
      deleteTotalReadingTime,
      deleteAllBookmarks, 
      bookmarkNotification,
      showBookmarkNotification,
      hideBookmarkNotification,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReadingContext = () => {
  return useContext(ReadingContext);
}; 
