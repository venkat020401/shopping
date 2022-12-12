import React from 'react'

function Cart({ cartList, removeCart, incQuantity, decQuantity }) {
    return (
        <ol className="list-group list-group-numbered">
            {
                cartList.map((item, index) => {
                    return <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            {item.name}<br></br>
                            Rs. {item.price}<br></br> Qty {item.quantity}

                            <button disabled={cartList.some(item => item.quantity === 5)} className="btn btn-outline-secondary" onClick={() => incQuantity(item)}>+</button>
                            <button disabled={cartList.some(item => item.quantity === 1)} className="btn btn-outline-secondary" onClick={() => decQuantity(item)}>-</button>
                            <button className="btn btn btn-secondary" onClick={() => removeCart(item)}>Remove</button> <br></br>
                            
                        </div>
                    </li>
                })
            }

        </ol>
    )
}

export default Cart