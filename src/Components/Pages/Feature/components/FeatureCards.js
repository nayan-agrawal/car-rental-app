import React from 'react'

const FeatureCards = (props) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="feature-block">
                <img src={props.imageUrl} alt="img" />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default FeatureCards