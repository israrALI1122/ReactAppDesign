import "./post.scss"
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";


const Post = ({post}) => {

  const [commentOpen,setCommentOpen]= useState(false)



    const liked= true;


  return (
    <div className="post">
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}} >
                        <span className="name"> {post.name} </span>
                    </Link>
                        <span className="date"> 1 min ago </span>
                </div>
            </div>
            <MoreHorizOutlinedIcon/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
        </div>
           <div className="info">
            <div className="items">
              {liked ? <FavoriteOutlinedIcon/>: <FavoriteBorderOutlinedIcon/>}  
              12 likes
            </div>
            <div className="items" onClick={()=>setCommentOpen(!commentOpen) }>
              <TextsmsOutlinedIcon/>
              12 comments
            </div>
            <div className="items">
             <ShareOutlinedIcon/>
             share
            </div>
        </div>
        {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default Post