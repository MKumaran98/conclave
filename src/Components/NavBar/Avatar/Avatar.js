import classes from './Avatar.module.css';
import {useState} from 'react'
import {useAuth} from '../../../Store/AuthContext'
import profileImage from '../../../Assets/default.png'
import {Link,useLocation} from 'react-router-dom'
import {Menu,MenuItem} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

const Avatar=()=>{
    const {userName,signOutUser,userImage}=useAuth()

    const {push}=useHistory()

    const [openDropdown,setOpenDropdown]=useState(null)

    const handleClick = (event) => {
        setOpenDropdown(event.currentTarget);
    };

    const handleClose = () => {
        setOpenDropdown(null);
    };
    
    const handleLogout=()=>{
        signOutUser();
        handleClose()
    }

    let avatar=null
    let {pathname}=useLocation();
    if(userName){
        avatar=(
            <div className={classes["name-avatar-container"]}>
                <p onClick={handleClick}>Hello, {userName}</p>
                <div className={classes["avatar-container"]}>
                    <img src={userImage?userImage:profileImage} className={classes["avatar"]}  alt="Active avatar" onClick={handleClick}/>
                    <div className={`${classes["avatar-bubble"]} ${classes["bubble-active"]}`}></div>
                    <Menu
                        id="simple-menu"
                        anchorEl={openDropdown}
                        keepMounted
                        open={Boolean(openDropdown)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        <MenuItem onClick={()=>{
                            push("/my-conclaves")
                            handleClose()
                        }}>My Conclaves</MenuItem>
                        <MenuItem onClick={()=>{
                            push("/bookmarked-conclaves")
                            handleClose()
                        }}>Bookmarked Conclaves</MenuItem>
                    </Menu>
                </div>
            </div>
        )
    }else{
        avatar=pathname!=="/login"&&(
            <div className={classes["name-avatar-container"]}>
                <Link to="/sign-up">
                    Login          
                </Link>
            </div>
        )
    }

    return(
        <div>
            {avatar}            
        </div>
    )
}

export default Avatar;