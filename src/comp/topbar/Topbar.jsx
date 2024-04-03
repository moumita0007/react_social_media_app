
import './Topbar.css';
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

function Topbar() {
    return (

        <div className='topbarContainer'>
        <div className='topbarLeft'>
          <span className='logo'>ReactSocial</span>
        </div>
        <div className='topbarCenter'>
           <div className='searchbar'>
           <FaSearch className='searchIcon'/>
           <input placeholder='Search for friend, post or video' className='searchInput'></input>
           </div>
        </div>
        <div className='topbarRight'>
        <div className='topbarLinks'>
        <span className='topbarLink'>Homepage</span>
        <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
        <div className='topbarIconsItem'>
        <IoPerson />
        <span className='topbarIconBadge'>1</span>
        </div>
        <div className='topbarIconsItem'>
        <MdOutlineMarkUnreadChatAlt />
        <span className='topbarIconBadge'>1</span>
        </div>
        <div className='topbarIconsItem'>
        <IoMdNotificationsOutline />
        <span className='topbarIconBadge'>1</span>
        </div>
        </div>
        <div>
        <img src="/assets/person1.jpg" alt="" className="topbarImg"/>
        </div>
        </div>
            
        </div>

    )

    }

export default Topbar;