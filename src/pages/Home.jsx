import React, { useState, useEffect } from 'react';
import AddProduct from '../table/AddProduct';
import ProductTable from '../table/ProductTable';
import '../App.css';
import axios from 'axios';

function Home() {
  async function handleProduct(product) {
    console.log(product);

    try {
      await axios.post('http://localhost:5000/products', product);
      const res = await axios.get('http://localhost:5000/products');
      const data = res.data;
      setProducts(data);
    } catch (err) {
      setError(err);
    }
  }

  // const addUser = (user) => {
  //   user.id = users.length + 1
  //   setUsers([...users, user])
  // }

  //const [users, setUsers] = useState(usersData);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      axios
        .get('http://localhost:5000/products')
        .then((res) => res.data)
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => setError(err));
    })();
  }, []);

  return (
    <div className='container'>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add Product</h2>
          <div>
            <AddProduct handleProduct={handleProduct} />
          </div>
        </div>
        <div className='flex-large'>
          <h2>View Product</h2>
          <ProductTable products={products} error={error} />
        </div>
      </div>
    </div>
  );
}

export default Home;
