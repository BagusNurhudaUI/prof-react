import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'

import "../styles/instaFeeds.css"

// token={'IGQVJVbWtSX1Rwa0lvUWVESG02MUp0SFoxaDFvZAGJPM2NWZAnRCNThHLUk1eHVLU0c0ZAmJ6S05LTWhaSXZAfYU1OSHNQN2NXbWZAXYXlQR3RVQXRET0NCeDdWUW1zZA1dBTTE5M0g0R0NoekpMV3F0a19GMgZDZD'} limit={16}

const InstaFeeds = ({...props}) => {
    const token = 'IGQVJVbWtSX1Rwa0lvUWVESG02MUp0SFoxaDFvZAGJPM2NWZAnRCNThHLUk1eHVLU0c0ZAmJ6S05LTWhaSXZAfYU1OSHNQN2NXbWZAXYXlQR3RVQXRET0NCeDdWUW1zZA1dBTTE5M0g0R0NoekpMV3F0a19GMgZDZD'
    //beda
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }

        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container" >
            {feeds.map((feed) => ( 
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
        
    );
}

export default InstaFeeds;