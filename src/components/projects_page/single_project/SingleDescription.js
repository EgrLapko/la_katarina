import React from 'react'

export default function SingleDescription({desc}) {
    return (
        <div className="single-description">
            <p className="desc-text">
                <span></span>{desc}
            </p>
        </div>
    )
}
