import React from 'react'
import product_cart from "../data/product_data";

const MainContent = () => {
    console.log(product_cart);
    const listItems = product_cart.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt="" />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Añadir al carrito</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            <h3>Headphones</h3>
            {listItems}
        </div>
    )
}
export default MainContent;


