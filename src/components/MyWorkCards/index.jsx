import React from 'react'

const MyWorkCards = ({ id, title, techStack, description, imgUrl }) => {
    return (
        <>
            return (
            <div className="box1">
                <div className="prj-img">
                    <img src={imgUrl} alt={title} />
                </div>
                <div className='title'>
                    <span>Title -</span> {title}
                </div>
                <div className='tech-stack'>
                    <span>Stack -</span> {techStack}
                </div>
                <div className='description'>
                    <span>Description -</span> {description}
                </div>
            </div>
            )
        </>
    )
}

export default MyWorkCards
