
import './Sidebar.css'
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { RiFolderVideoFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { RiCalendarEventFill } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";

import {Users} from "../../DummyData"
import CloseFriend from '../closeFriend/CloseFriend';






function Sidebar() {
    return (

        <div className='sidebar'>
          <div className='sideWrapper'>
          <ul className='sidebarList'>
          
          <li className='sidebarListItem'>
          <MdRssFeed className='sidebarIcon'/>
          <span className='sidebarListItemText'>Feed</span>
          </li>

          <li className='sidebarListItem'>
          <BsChatSquareTextFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Chats</span>
          </li>

          <li className='sidebarListItem'>
          <RiFolderVideoFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Videos</span>
          </li>

          <li className='sidebarListItem'>
          <MdGroup className='sidebarIcon'/>
          <span className='sidebarListItemText'>Groups</span>
          </li>

          <li className='sidebarListItem'>
          <FaBookmark className='sidebarIcon'/>
          <span className='sidebarListItemText'>Bookmarks</span>
          </li>

          <li className='sidebarListItem'>
          <FaRegCircleQuestion className='sidebarIcon' />
          <span className='sidebarListItemText'>Questions</span>
          </li>

          <li className='sidebarListItem'>
          <PiSuitcaseSimpleFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Jobs</span>
          </li>

          <li className='sidebarListItem'>
          <RiCalendarEventFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Events</span>
          </li>

          <li className='sidebarListItem'>
          <RiGraduationCapFill className='sidebarIcon'/>
          <span className='sidebarListItemText'>Course</span>
          </li>
          
          </ul>

          <button className='sidebarButton'> Show More</button>
          <hr className='sidebarhr'/>

          <ul className='sidebarFriendList'>
              {Users.map(u=>(
                <CloseFriend key={u.id} user={u}/>
              ))}
          </ul>
          </div>
        
        </div>

    )

    }

export default Sidebar;