import React from 'react';
import ProductCategory from './Product-Category-Row/product-category.comp';
import ProductCuatro from './Product-Category-Row/product-cuatro/product-cuatro.comp';
import ProductCinco from './product-cinco/product-cinco.comp';
import ProductDos from './product-dos/product-dos.comp';
import ProductRow from './product-row/product-row.comp';
import ProductSeis from './product-seis/product-seis.comp';
import ProductSiete from './product-siete/product-siete.comp';

import './product-table.style.css';
import ProductTres from './product-tres/product-tres.comp';
const ProductTable = () => {   
    return(
        <div className="product-table-container">
         Name       Prices                                                   
        
          <ProductCategory/> 
          <ProductRow/>
          <ProductDos/>
          <ProductTres/>
          <ProductCuatro/>
          <ProductCinco/>
          <ProductSeis/>
          <ProductSiete/>
         
        </div>
    );
}
export default ProductTable;
