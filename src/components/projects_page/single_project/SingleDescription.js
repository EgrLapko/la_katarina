import React from 'react'

export default function SingleDescription({desc}) {
    return (
        <div className="single-description" style={ desc === "" ? {display: "none"} : {display: "flex"} }>
            <p className="desc-text">
                <span></span>{desc}
            </p>
        </div>
    )
}
