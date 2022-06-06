import React from 'react'

const handleClick = function(permalink){
    console.log('clicked');
    // console.log(permalink);
    // window.location.href = `${permalink}`
}
const Feed = (props) => {
    const { id, caption, media_type, media_url, permalink } = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='300px' 
                    src={media_url} 
                    alt={caption}
                    
                    type="video/mp4" 
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    // onClick={handleClick(permalink)}
                    // href={`${permalink}`}
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                    <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    onClick={handleClick(permalink)}
                    // href={`${permalink}`}
                    src={media_url} 
                    alt={caption} 
                    />
                
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;