import './leftbar.scss'
import firends from '../../../src/images/icon3.png'
import game from '../../images/game.png'
import market from '../../images/market.png'
import memor from '../../images/memor.png'
import play from '../../images/play.png'
import shop from '../../images/shop.png'
import watch from '../../images/watch.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Leftbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={firends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={game} alt="" />
            <span>games</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={memor} alt="" />
            <span>Memories</span>
          </div>
          <div className="item">
            <img src={play} alt="" />
            <span>Play</span>
          </div>
          <div className="item">
            <img src={shop} alt="" />
            <span>Shop</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={firends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={game} alt="" />
            <span>games</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={memor} alt="" />
            <span>Memories</span>
          </div>
          <div className="item">
            <img src={play} alt="" />
            <span>Play</span>
          </div>
          <div className="item">
            <img src={shop} alt="" />
            <span>Shop</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={play} alt="" />
            <span>Play</span>
          </div>
          <div className="item">
            <img src={shop} alt="" />
            <span>Shop</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Leftbar