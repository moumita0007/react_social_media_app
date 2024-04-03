import './Share.css'
import { MdPermMedia } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";




function Share(){
    return (
        <div className="share">
           <div className="shareWrapper">
              <div className="shareTop">
                <img src="/assets/person1.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind?" className="shareInput"/>
                </div>

                 <hr className="shareHr"/>

              <div className="shareBottom">
                 <div className="shareOptions">
                    <div className="shareOption">
                    <MdPermMedia color="tomato" className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>

                
                    <div className="shareOption">
                    <MdLabel color="blue" className='ShareIcon'/>
            
                        <span className="shareOptionText">Tag</span>
                    </div>

                
                    <div className="shareOption">
                    <FaLocationDot color="green" className='shareIcon'/>
                    
                        <span className="shareOptionText">Locations</span>
                    </div>

    
                    <div className="shareOption">
                    <MdEmojiEmotions color="Yellow" className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                 </div>

                 <button className='shareButton'>Share</button>

              </div>
           
           </div>
          
        </div>

    )
}

export default Share;