import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Actions/cartAction";

const Cart = () => {
  const cartList = useSelector((state) => state.cartReducer.cartList);
  const dispatch = useDispatch();
  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="Cart">
        {cartList &&
          cartList.map((item) => {
            console.log('cartList', item);
            return (
              <div key={item.id} className="CartItem">
                <img src={item.data.imgUrl} className="CartImg" />
                <h3>{item.data.productName}</h3>
                <h3>{item.data.price}/-</h3>
                <h2>{item.data.qty}</h2>
                <button
                  className="removeFromCartButton"
                  onClick={() => removeItemHandler(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cart;
