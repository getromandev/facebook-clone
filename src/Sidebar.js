import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow 
                src='https://media-exp1.licdn.com/dms/image/C4E35AQEeOLrrJKWSeA/profile-framedphoto-shrink_200_200/0?e=1600552800&v=beta&t=n4XbgqKFoidyucUvQHVCA8GVBV0oPqOroUoLWxQjJR8' 
                title='Heriberto Roman'
            />
            <SidebarRow 
                Icon={LocalHospitalIcon} 
                title='Covid 19 Info' 
            />
            <SidebarRow 
                Icon={LocalHospitalIcon} 
                title='Covid 19 Info' 
            />
            <SidebarRow 
                Icon={EmojiFlagsIcon} 
                title='Pages'
            />
            <SidebarRow 
                Icon={PeopleIcon} 
                title='Friends'
            />
            <SidebarRow 
                Icon={ChatIcon} 
                title='Messenger'
            />
            <SidebarRow 
                Icon={StorefrontIcon} 
                title='MarketPlace'
            />
            <SidebarRow 
                Icon={VideoLibraryIcon} 
                title='Videos'
            />
            <SidebarRow 
                Icon={ExpandMoreOutlined} 
                title='MarketPlace'
            />
            
        </div>
    )
}

export default Sidebar
