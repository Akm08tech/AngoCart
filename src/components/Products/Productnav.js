import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from '@mui/material';
import { API_BASE_URL } from '../../config/Config';

const ProductsList = ({ products, page, onPageChange }) => {
  const itemsPerPage = 10; 
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <ul>
        {displayedProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <Button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={() => onPageChange(page + 1)} disabled={endIndex >= products.length}>
        Next
      </Button>
    </div>
  );
};

const Productnav= () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(' API_BASE_URL /category')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products: ', error));
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      {/* <h1>Product List</h1> */}
      <ProductsList products={products} page={currentPage} onPageChange={handlePageChange} />
    </Container>
  );
};

export default Productnav;
