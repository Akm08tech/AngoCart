import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from '@mui/material';

const ProductsList = ({ categories, page, onPageChange }) => {
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (!categories || categories.length === 0) {
    return (
      <div>
        <p>No categories to display.</p>
        <Button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={endIndex >= (categories ? categories.length : 0)}
        >
          Next
        </Button>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {categories.slice(startIndex, endIndex).map((category) => (
          <li key={category.id}>{category.category_name}</li>
        ))}
      </ul>
      <Button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={endIndex >= categories.length}
      >
        Next
      </Button>
    </div>
  );
};

const Productnav = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const apiUrl = 'https://dev.techstreet.in/angocartecomm/public/api/v1/category';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDUyNmU3ZWE3Mjg4N2U2NjI2ZmVmZmVkYTAzNTUzMTZlYzY1ZWU3OTdhYzU1OGMzMDY4YjhlZmFlNzYxMTdlODVlMTIzNGQzMGViNTRmNzEiLCJpYXQiOjE2OTgwMzczMDkuMDc2MjYxLCJuYmYiOjE2OTgwMzczMDkuMDc2MjY1LCJleHAiOjE3Mjk2NTk3MDkuMDcxOTMsInN1YiI6IjEyOSIsInNjb3BlcyI6W119.znuQqpGZ_-uwO8_JSeeao_cWtRPV-xKHJnZjU0QLdJ3PArK_bVV4FXaeJqWhHl2QwGm3mvXuxwNND9wtRRN3lG8BMb48gUyYBz1hv0-Z4KhbJTjDzY8zsVtfZ4y9fHv1c4kUgbhX-OlSJYdiLsiQyORoGdmlp6_ueeALX8eznwhf8Hi3Z8RHEGA3H-TPQ9PlTRNUrTlaS3dwgV2FTzmEmPaBMuhcpHSWcv8-aiB4Ob5HScH8ZjCIccWINUKEMU_zaeVgjHa7K7GkENAjbu3YJQg1g31tk4F_Sv7RKxCZLLxCrxXPGfa5Fk4fgv7I4cDPYPxbp03sUe_7oAOVM8SZOwAEQhUlK5OI-2vijXI_ijyI2rhD8SUSxflQdXNUP0Yzb5JlrOcJasFRA24OJCZ4BHF0tv3wJ9cs3R8fIbHzD3vemGX8IOiujueUXKTtLvDaxv7yfhPQda6BvwgsYKUOnqDtW-rgLwkf-xxmQngZM-1gHrj1gpU66tw65kpdxXGa9QprAnZW_uMqWXjRxqMRCNBELvXNvb-kC1_0OUa-8PQEHXCh0WpBrko86dR8y0lfbWtLYJYyYNiHceyt9iPFSl1ryUYcxvjxsiaEWwosF9FWGPS5YihaEydmlkApv_kmD5cWeCERwN_HcAiPLXF02FjnWqqsqrLFmcn34xZwTbI'; // Replace with your actual token

    axios
      .post(apiUrl, {}, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setCategories(response.Response.category);
        console.log(categories);
      })
      .catch((error) => console.error('Error fetching categories: ', error));
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <ProductsList categories={categories} page={currentPage} onPageChange={handlePageChange} />
    </Container>
  );
};

export default Productnav;
