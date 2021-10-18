import React from "react";
import ProductItem from "../componentes/ProductItem"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css"></link>

class GridProduct extends React.Component{
    render(){
        return(
            <div className="col-12 border">
                <i class='bx bxs-cart' ></i>
                <h1 className=" text-center"> Store </h1>
                <p className=" text-center">this is the Store Page </p> 
                <hr></hr>
                <ProductItem/>
            </div>
        );
    }
}

export default GridProduct;