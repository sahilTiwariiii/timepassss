import React from 'react'
import pizzas from '../pizza-data'
import {Button,Card,Row,Col, Modal} from 'react-bootstrap';
import {MdDescription} from 'react-icons/md'
import {SiCodechef} from 'react-icons/si'
const Estore = () => {
  return (
    <>
    <div>
    {/* {pizzas.map(pizza => (
        <div className="container">

           <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={pizza.image} alt="Card image cap" />
  <div className="card-body">
    <h2 className="card-title" style={{fontWeight:'bold'}}>{pizza.name}</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        

                    ))} */}
 
<div className="container">
    <div className="row gy-3 my-3">
    {pizzas.map(pizza => (
        <>
        
        <div className="col-sm-6 col-md-3 col-lg-3">
       <div className="card" 
    //    style={{width: '18rem'}}
       >
  <img className="card-img-top" src={pizza.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{pizza.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>
        </>
 ))}
       


    </div>
</div>

    </div>

    </>
  )
}

export default Estore