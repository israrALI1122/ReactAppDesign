import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './comments.scss'
const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  const comments =[
    {
      id:1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nulla quae soluta optio iste explicabo quo? Doloremque, ducimus illum optio quod numquam, repellat itaque consequatur eligendi placeat eos ipsam facilis?",
      name: "israr ali",
      userId:2,
      profilePic:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA..",
    },
    {
      id:1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nulla quae soluta optio iste explicabo quo? Doloremque, ducimus illum optio quod numquam, repellat itaque consequatur eligendi placeat eos ipsam facilis?",
      name: "israr ali",
      userId:2,
      profilePic:"https://images.pexels.com/photos/6827381/pexels-photo-6827381.jpeg?cs=srgb&dl=pexels-dario-fernandez-ruz-6827381.jpg&fm=jpg&_gl=1*1ayg9kz*_ga*MTM0OTEyNDIyMC4xNjY3NDg4MjE4*_ga_8JE65Q40S6*MTY2NzQ4ODIyMi4xLjEuMTY2NzQ4OTQwMC4wLjAuMA..",
    }
  ]



  return (
    <div className='comments'>
      <div className="write">
      <img src={currentUser.profilePic} alt="" />
      <input type="text" placeholder='write a comment'/>
      <button>send</button>
      </div>
      {
        comments.map(comment=>{
          return(
          <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
          </div>
          )
        })
      }
    </div>
  )
}

export default Comments