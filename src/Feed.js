import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic='https://media-exp1.licdn.com/dms/image/C4E35AQEeOLrrJKWSeA/profile-framedphoto-shrink_200_200/0?e=1601089200&v=beta&t=N3e_7rb6wAINJ4KIiHG-o2YEXQYEj8_Nut00iCBHIuA' 
                message='Wow this works'
                timestamp='Time'
                username='Built By Getroman'
                image='https://media-exp1.licdn.com/dms/image/C4E35AQEeOLrrJKWSeA/profile-framedphoto-shrink_200_200/0?e=1601089200&v=beta&t=N3e_7rb6wAINJ4KIiHG-o2YEXQYEj8_Nut00iCBHIuA'
            />
            <Post 
                profilePic='https://media-exp1.licdn.com/dms/image/C4E35AQEeOLrrJKWSeA/profile-framedphoto-shrink_200_200/0?e=1601089200&v=beta&t=N3e_7rb6wAINJ4KIiHG-o2YEXQYEj8_Nut00iCBHIuA' 
                message='Wow this works'
                timestamp='Time'
                username='Built By Getroman'
            />
        </div>
    )
}

export default Feed
