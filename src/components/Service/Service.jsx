import {useEffect} from "react"
import './Service.css';
import { CiBookmark } from "react-icons/ci"; 
import {useReadingContext} from "../../context/ReadingContext";

const Service = ({service}) => {
 const {id,author_picture, blog_picture, author_name, blog_title, date,
read_time} = service; 
 
 //from context provider
 const { 
   addReadingTime, 
   toggleBookmark, 
   isBlogBookmarked,
   showBookmarkNotification,
   hideBookmarkNotification,
   } = useReadingContext();


 /*useEffect(() => {
    if (isBlogBookmarked(id)) {
      showBookmarkNotification(blog_title);
    }
  }, [id, blog_title, isBlogBookmarked, showBookmarkNotification]);

*/
    const markAsRead = (time) => {
       addReadingTime(time);
    };
    
   const handleBookmarkClick = () => {
     //blog or post id
    toggleBookmark(id);
    if (!isBlogBookmarked(id)) {
      showBookmarkNotification(blog_title);
    } else {
      hideBookmarkNotification();
    }
  };


    return (
        <div className='p-10 w-[800px]'>
            <img className='h-[400px] w-full ' src={blog_picture} alt="" />
            <div className='flex items-center justify-between'>
            <div className='flex  items-center justify-center gap-5 mt-3 '>
            <img className='h-10 w-10 rounded-full' src={author_picture} alt="" /> 
             <div className=''>
             <h4 className='text-lg font-semibold'>{author_name}</h4>
            <h5 className='text-sm'>{date}</h5>
             </div>
            </div>
            <div>
            <h4 className='flex items-center'><span>{read_time} min
            read</span><CiBookmark onClick={handleBookmarkClick} /></h4>
             </div>
             </div>
             <h2 className='text-2xl mt-3'>{blog_title}</h2> 
             <h5 className='mt-6'>#beginners  #programing</h5>
             <button onClick={()=>markAsRead(parseInt(read_time,10))} className='text-lg mt-8
             underline text-sky-500'>Mark as read</button>
        </div>
    );
};

export default Service; 