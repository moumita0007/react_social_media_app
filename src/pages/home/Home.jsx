
import Topbar from '../../comp/topbar/Topbar'
import Sidebar from '../../comp/sidebar/Sidebar';
import Feed from '../../comp/feed/Feed'
import Rightbar from '../../comp/rightbar/Rightbar'
import './Home.css'

function Home() {
    return (<>
        <Topbar />
        <div className='homeContainer'>
        <Sidebar/>
        <Feed />
        <Rightbar/>
        </div>
        


        </>

    )

    }

export default Home;