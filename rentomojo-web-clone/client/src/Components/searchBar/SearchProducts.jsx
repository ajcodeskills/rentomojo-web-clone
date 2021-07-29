import React from 'react'
import { SearchContext } from '../../Context/SearchContext';
import { ProductProto } from '../productsProto/ProductProto';

function SearchProducts() {
    const {data} = React.useContext(SearchContext);
    const style = {
        container: {
            display: "flex",
            flexDirection : "column",
            width:"90%",
            margin: "80px auto 0 auto"
        },
        content: {
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gridTemplateRows: "auto",
            gap:"20px",
        }
    }
    return (
        <div style = {style.container}>
            <div style = {{marginBottom:50}}>
                <h3>Search Results({data.length})</h3>
            </div>
            <div style = {style.content}>
                {
                    data?.map(item => <ProductProto key = {item._id} {...item} />)
                }
            </div>
        </div>
    )
}

export default SearchProducts
