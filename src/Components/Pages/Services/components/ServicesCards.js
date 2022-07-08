import React from 'react'

const ServicesCards = (props) => {
    return (
        <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-block d-flex flex-column justify-content-between align-items-center">

                <img src={props.imageUrl} alt="img" />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a href="#">Explore</a>

            </div>
        </div>
    )
}

export default ServicesCards