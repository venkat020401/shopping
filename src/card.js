import React from 'react'

function Card({ product, AddtoCart, cartList }) {
    return (
        <div className='col-lg-4 mb-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={product.img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Rs. {product.price}</p>
                    <span className='buttonds'>
                        <button disabled={cartList.some(item => item.id === product.id)} className="btn btn-outline-secondary" onClick={() => AddtoCart(product)}>Add to cart</button>
                        <button className="btn btn-secondary" >Buy Now</button>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Card