
import './profile.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CottageIcon from '@mui/icons-material/Cottage';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Posts from '../../compnents/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1172207.jpg&fm=jpg&_gl=1*t5y1gq*_ga*MTM0OTEyNDIyMC4xNjY3NDg4MjE4*_ga_8JE65Q40S6*MTY2NzQ4ODIyMi4xLjEuMTY2NzQ5MTA3MS4wLjAuMA.." alt="" className="cover" />
        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?cs=srgb&dl=pexels-chloe-1043474.jpg&fm=jpg&_gl=1*z79he9*_ga*MTM0OTEyNDIyMC4xNjY3NDg4MjE4*_ga_8JE65Q40S6*MTY2NzQ4ODIyMi4xLjEuMTY2NzQ5MTA1NS4wLjAuMA.." alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">

            <a href="facebook">
              <FacebookOutlinedIcon fontSize='large'/>
            </a>
            <a href="insta">
              < InstagramIcon fontSize='large'/>
            </a>
            <a href="twitter">
              <TwitterIcon fontSize='large'/>
            </a>
            <a href="link">
              <LinkedInIcon fontSize='large'/>
            </a>

          </div>
          <div className="center">
            <span>israr ali</span>
            <div className="info">
              <div className="item">
              <CottageIcon/>
              <span>pakistan</span>
              </div>
              <div className="item">
              <LanguageIcon/>
              <span>israr.ali</span>
            </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>

          </div>
        </div>
          <Posts/>
      </div>
    </div>
  )
}

export default Profile