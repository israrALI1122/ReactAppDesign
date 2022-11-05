import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './stories.scss'

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

    //temporry
    const stories =[
        {
            id:1,
            name: 'israr ali',
            img:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA.."
        },
        {
            id:2,
            name: 'israr ali',
            img:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA.."
        },
        {
            id:3,
            name: 'israr ali',
            img:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA.."
        },
        {
            id:4,
            name: 'israr ali',
            img:"https://images.pexels.com/photos/13430132/pexels-photo-13430132.jpeg?cs=srgb&dl=pexels-alex-umbelino-13430132.jpg&fm=jpg&_gl=1*dibp1k*_ga*MjExMDYzNDUyNi4xNjY3MjM2MzEz*_ga_8JE65Q40S6*MTY2NzIzNjMxNS4xLjAuMTY2NzIzNjMxNS4wLjAuMA.."
        },
     
    ]

  return (
    <div className='stories'>
       <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story =>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories