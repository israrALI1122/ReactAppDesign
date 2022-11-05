
import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

  const posts=[
    {
      id:1,
      name: 'israr ali',
      userId:1,
      profilePic:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA..",
      desc:"hey there, this is my first post, i uploaded in this new application and i love it ",
      img:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA.."

  },
    {
      id:2,
      name: 'israr ali',
      userId:2,
      profilePic:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA..",
      desc:"hey there this is my first post is upload in this new application and i love it ",
      

  },
    
  ]


  return (
    <div className='posts'>
      {posts.map(post=>(
       <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts