import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteAllProducts, removeProduct } from "../Redux/Actions/productAction";
import CreateProductForm from "./CreateProductForm";

const ProductList = () => {

    const [isCreate, setIsCreate] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);

    const location = useLocation();
    console.log('locaation: ---', location);

    const createProductHandler = () => {
        setIsCreate(true);
    }

    const deleteAllProductsHandler = () => {
        dispatch(deleteAllProducts());
    }

    const removeProductHandler = (productId) => {
        dispatch(removeProduct(productId))
    }
    return (
        <>
            <div className="Header">
                <button onClick={createProductHandler}>Create</button>
                <button onClick={deleteAllProductsHandler}>Delete</button>
            </div>    
            { isCreate && <CreateProductForm />}

            <div>
                {
                    products && products.map(product => {
                        return(
                        <div key={product.id} className="CartItem">
                            <img src={product.data.imgUrl} className="CartImg"/>
                            <h3>{product.data.productName}</h3>
                            <h3>{product.data.price}/-</h3>
                            <button onClick={()=>removeProductHandler(product.id)}>Remove</button>
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductList