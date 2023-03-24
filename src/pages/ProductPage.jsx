import { useParams } from 'react-router-dom';

function ProductPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product Page</h1>
      <h2>Product Id: {params.productId}</h2>
    </div>
  );
}

export default ProductPage;
