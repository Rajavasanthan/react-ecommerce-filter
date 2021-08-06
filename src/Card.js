import React from 'react'

function Card(props) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-4 mt-1">
              <div className="card card-inverse card-info">
                <img className="card-img-top" src={props.carObj.image} />
                <div className="card-block">
                  <figure className="profile profile-inline">
                    <img src={props.carObj.image} className="profile-avatar" alt="" />
                  </figure>
                  <h4 className="card-title">{props.carObj.productName}</h4>
                  <div className="card-text">
                    Tawshif is a web designer living in Bangladesh.
                  </div>
                </div>
                <div className="card-footer">
                  <small>{props.carObj.brandName} - {props.carObj.carColor} - {props.carObj.id}</small>
                  <button className="btn btn-info float-right btn-sm">Follow</button>
                </div>
              </div>
            </div>
    )
}

export default Card
