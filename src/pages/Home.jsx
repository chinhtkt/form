import React, {useState} from 'react';
import AddProduct from '../table/AddProduct';
import ProductTable from '../table/ProductTable';
import '../App.css'

function Home() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add Product</h2>
          <div>
          <AddProduct addUser={addUser} />
          </div>
        </div>
        <div className='flex-large'>
          <h2>View Product</h2>
          <ProductTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default Home;
