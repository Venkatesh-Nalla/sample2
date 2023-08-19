import React from 'react'
export default function Card({name,year}) {
    return(
    <div>
        <h1 style={{padding:"5px",backgroundColor:"pink"}}>{name}   {year}</h1>
    </div>
    )
}