import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Actions/cartAction";
import { productQuantity } from "../Redux/Actions/productAction";

const Card = (props) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(
      addToCart(props.id, {
        productName: props.productName,
        price: props.price,
        imgUrl: props.imgUrl,
        qty: qty,
      })
    );
    dispatch(productQuantity(props.id, qty));
    navigate('/cart')
  };

  console.log("In card typeof(qty), qty", typeof qty, qty);

  return (
    <>
      <div className="Card">
        <img src={props.imgUrl} alt={props.productName} />
        <div className="Details">
          <h2>{props.productName}</h2>
          <h3>{props.price}/-</h3>
          <h3>Stock: {props.stock}</h3>
          <div>
            Select Quantity:
            {props.stock > 0 && (
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(Number(props.stock)).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button className="AddToCardButton" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
