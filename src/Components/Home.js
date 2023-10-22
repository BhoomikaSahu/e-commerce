import { Component } from "react";
import { connect, useSelector } from "react-redux"
import Card from "./Card";

// const Home = () => {
//     const products = useSelector(state => state.productReducer.products);
//     return (
//         <>
//             <div className="Home"> 
//                 {
//                     products && products.map((card) => {
//                         return(
//                             <Card 
//                                 key={card.id}
//                                 id= {card.id}
//                                 productName={card.data.productName}
//                                 price={card.data.price}
//                                 imgUrl={card.data.imgUrl}
//                             />
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }


class Home extends Component{
    render(){
        return (
            <>
                <div className="Home"> 
                    {
                        this.props.products && this.props.products.map((card) => {
                            return(
                                <Card 
                                    key={card.id}
                                    id= {card.id}
                                    productName={card.data.productName}
                                    price={card.data.price}
                                    imgUrl={card.data.imgUrl}
                                    stock={card.data.stock}
                                />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        products: state.productReducer.products
    }
}


export default connect(mapStateToProps)(Home);