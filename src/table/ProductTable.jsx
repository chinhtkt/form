import React from 'react';

const ProductTable = ({products, error}) => (
  <table>
    <thead>
      <tr>
        <th>Product Name &nbsp;&nbsp;</th>
        <th>Product Price &nbsp;&nbsp;</th>
      </tr>
    </thead>
    <tbody>
    {products &&
        products.length > 0 &&
        products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}$</td>
          </tr>
        ))}
      {error && <p>Something went wrong!</p>}
    </tbody>
  </table>
);

export default ProductTable;
