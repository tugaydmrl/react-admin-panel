import { Badge } from '@material-ui/core'
import { Language, Notifications, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" exact className="topbarLink">
                        <span className="logo">stideadmin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Badge badgeContent={2} color="error">
                            <Notifications />
                        </Badge>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://i.ibb.co/vqK85Jp/Screenshot-5.jpg" alt="" className="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
