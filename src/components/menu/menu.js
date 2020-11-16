import React from 'react'
import {TrashOutline} from "@graywolfai/react-heroicons";

export default function Menu(props) {
    return(
        <div className='drop-down' onClick={()=>props.remove(props.id)}>
            <TrashOutline />    
            No me interesa este Tweet
        </div>
    )
}