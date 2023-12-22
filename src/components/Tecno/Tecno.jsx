import { useEffect, useState } from 'react';
import './Tecno.css';
import Service from '../Service/Service'; 
import {useReadingContext} from "../../context/ReadingContext";
import BookmarkNotification from '../BookmarkNotification';


const Tecno = () => {
    const [services, setServices] = useState([]);
    const { 
      getBookmarkedLength,
      getTotalReadingTime, 
      deleteTotalReadingTime,
      deleteAllBookmarks,
    } = useReadingContext();
    
    
    useEffect(() =>{
        fetch('public/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    

    return (
        <div className='tecno-container'>
         <div className='service-container'>
            {
                services?.map(service => <Service
                key={service.id}
                service = {service}
                /> )
            }
         </div>
         <div className='tost-container'>
         <div>
            <h4 className='text-2xl font-bold'>Spend Time On Read :
            {getTotalReadingTime()} </h4>
            <button className="p-[7px] text-bold bg-purple-200 " onClick={deleteTotalReadingTime}>
             Delete Total Time
             </button>
         <h4 className='text-3xl font-bold mt-5'>Bookmarked Blogs :
           {getBookmarkedLength()} 
         </h4> 
        <button className="p-[7px] text-bold bg-purple-200 " onClick={deleteAllBookmarks}>
             Delete All Bookmark
             </button>
         
         <BookmarkNotificationContainer />
         
         
         {/* {
            cart.map(c => {
                return (
                    <p>{JSON}</p>
                )
            })
         } */}
        </div>
         <div>
         </div>
         </div>
        </div>
    );
};


const BookmarkNotificationContainer = () => {
  const { bookmarkNotification, hideBookmarkNotification } = useReadingContext();

  return (
    <div>
      {bookmarkNotification && (
        <BookmarkNotification
          blogTitle={bookmarkNotification.blogTitle}
          onClose={hideBookmarkNotification}
        />
      )}
    </div>
  );
};




export default Tecno;