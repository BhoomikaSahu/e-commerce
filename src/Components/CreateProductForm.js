import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createProduct } from "../Redux/Actions/productAction";
import { useNavigate } from "react-router-dom";

// const CreateProductForm = () => {
  // const [productName, setProductName] = useState("");
  // const [price, setPrice] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
//   const dispatch = useDispatch();
  // const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createProduct({ productName, imgUrl, price }));
//     navigate("/");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           id="name"
//           placeholder="Enter Product Name"
//           required
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <input
//           type="text"
//           id="price"
//           placeholder="Enter Product Price"
//           required
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <input
//           type="text"
//           id="imgUrl"
//           placeholder="Enter Product URL"
//           required
//           onChange={(e) => setImgUrl(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

const CreateProductForm = (props) => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [stock, setStock] = useState(null);

    const products = useSelector(state => state.productReducer.products);
    const res = products.find(product => product.data.productName === productName);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.handleSubmit({ productName, imgUrl, price, stock });
      navigate("/");
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Enter Product Name"
            required
            onChange={(e) => setProductName(e.target.value)}
          />
          {res && <div>This product name is exist</div>}
          <input
            type="text"
            id="price"
            placeholder="Enter Product Price"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            id="imgUrl"
            placeholder="Enter Product URL"
            required
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <input 
            type='number'
            id='qty'
            placeholder="Enter Product Count"
            required
            onChange={(e) => setStock(e.target.value)}
          />
          <button disabled={res}>Submit</button>
        </form>
      </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: data => {dispatch(createProduct(data))}
    }
}

export default connect(null, mapDispatchToProps)(CreateProductForm);
