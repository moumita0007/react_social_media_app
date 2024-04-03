
import './Post.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import {Users} from "../../DummyData"
import { useState } from 'react';


function Post({post}){
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =() =>{
        setLike( isLiked ? like-1 :like+1)
        setIsLiked(!isLiked)

    }

    return (
        <div className='post'>
           <div className='postWrapper'>
               <div className='postTop'>
               <div className='postTopLeft'>
                   <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                    className='postProfileImg' alt=""/>
                   <span className='postUsername'>
                      {Users.filter((u) => u.id === post?.userId)[0].username}
                   </span>
                   <span className='postDate'>{post.date}</span>

               </div>
               <div className='postTopRight'></div>
               <BsThreeDotsVertical />
               </div>
               <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
               </div>
               <div className='postBottom'>
                  <div className='postBottomLeft'>
                     <img src="assets/like.jpeg" className='likeIcon' alt="" onClick={ likeHandler}/>
                     <img src="assets/heart.jpeg" className='likeIcon' alt="" onClick={ likeHandler}/>
                     <span className='postLikeCounter'>{like} people reacted.</span>
                  </div>
                  <div className='postBottomRight'>
                      <span className='postCommentText'>{post.Comment} comments</span>
                  </div>
               </div>
           </div>
        </div>
    )
}

export default Post;