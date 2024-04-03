
import './Rightbar.css'
import RightbarFriend from './RightbarFriend';
import {Users} from "../../DummyData"



function Rightbar(Profile) {

    const HomeRightbar = () =>{
    return (
        <>
        <div className='birthdayContainer'>
                      <img src="assets/gift.jpeg" alt="" className='birthdayImg'/>
                      <span className='birthdayText'><b>Subhrabrata Biswas</b> and <b>3 other friends</b> have
                       birthday today.
                       <img className='rightbarAd' src='assets/Ad.jpeg' alt='' />
                       </span>
                      
                  </div>

                  <h4 className='rightbarTitle'>Online friends</h4>
                  <ul className='rightbarFriendList'>
                  
                  {Users.map((u)=>(
                    <RightbarFriend key={u.id} user={u}/>
                  ))}
                  </ul>
        </>)
    }

    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:   </span>
              <span className="rightbarInfoValue">New York</span>
              </div>

              <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:   </span>
              <span className="rightbarInfoValue">Kolkata</span>
              </div>

              <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:   </span>
              <span className="rightbarInfoValue">Single</span>
              </div>

            </div>

            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person1.jpg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName"> Sonarika Mukherjee</span>
                </div>

                <div className="rightbarFollowing">
                <img src="assets/person2.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName"> Krishna Vasudeva</span>
            </div>
           
            <div className="rightbarFollowing">
                <img src="assets/Deepika.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName"> Deepika Padukon</span>
            </div>
            </div>

            </>
        )
    }
        return (
            <>
        <div className='rightbar'>
             <div className='rightbarWrapper'>
               <HomeRightbar />
             </div>
        </div>

        </>

    )
}

export default Rightbar;