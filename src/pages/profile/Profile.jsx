import Topbar from '../../comp/topbar/Topbar'
import Sidebar from '../../comp/sidebar/Sidebar';
import Feed from '../../comp/feed/Feed'
import Rightbar from '../../comp/rightbar/Rightbar'

import './Profile.css';

function Profile() {
    return (
       <>
       <Topbar />
    <div className='profile'>
         <Sidebar/>
         <div className='profileRight'>
            <div className='profileRightTop'>
               <div className='profileCover'>
                 <img className='profileCoverImg' src="assets/cover1.jpeg" alt=""/>
                  <img className='profileUserImg' src="assets/user1.jpeg"  alt=""/>
               </div>
                <div className='profileInfo'>
                   <h4 className='profileInfoName'>john Parkar</h4>
                   <span className='profileInfoDesc'>Hello My Friends!</span>
                </div>
         </div>
         <div className='profileRightBottom'>
         <Feed />
         <Rightbar/>
         </div>
       
       </div>
       </div>
       </>

    )

}

export default Profile;