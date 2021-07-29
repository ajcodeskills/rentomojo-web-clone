import React from 'react'
import axios from 'axios';
import { ProductProto } from '../productsProto/ProductProto';
import rigtharrow from "../../image/rightarrow.png";
import leftarrow from "../../image/leftarrow.png";

export function AllItems() {
    const [products, setProducts] = React.useState([]);
    const [productIndex, setProductIndex] = React.useState(1)
    React.useEffect(() => {
        axios.get('/allProducts')
            .then(res=>setProducts(res.data))
            .catch(err => console.log(err.message));
    },[])
    const style = {
      conatiner: {
        display: "flex",
        justifyContent: "space-around",
        overflow: "hidden",
      },

      button: {
        height: "45px",
        width: "100px",
        marginLeft: "10px",
        marginBottom: "40px",
        floar: "right",
        border: "1px solid grey",
        cursor: "pointer",
        borderRadius: "50px",
      },
      content: {
        display: "flex",
        justifyContent: "space-between",
      },
    };
    return (
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div style={{ textAlign: "right", display: "flex", width: "100px" }}>
            <button
              style={style.button}
              disabled={productIndex === 1}
              onClick={() => setProductIndex((prev) => prev - 1)}
            >
              <img
                src={leftarrow}
                alt=""
                style={{
                  paddingTop: "3px",
                  opacity: "0.4",
                  height: "40px",
                }}
              />
            </button>
            <button
              style={style.button}
              disabled={productIndex * 4 === products.length}
              onClick={() => setProductIndex((prev) => prev + 1)}
            >
              <img
                src={rigtharrow}
                alt=""
                style={{
                  paddingTop: "5px",
                  opacity: "0.4",
                  height: "21px"
                }}
              />
            </button>
          </div>
        </div>

        <div style={style.content}>
          {products?.map((item, idx) => {
            if (idx < productIndex * 3 && idx >= (productIndex - 1) * 3)
              return <ProductProto key={item._id} {...item} />;
          })}
        </div>
      </div>
    );
}

