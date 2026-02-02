import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) return <h2>Không tìm thấy sản phẩm</h2>;

  const handleAdd = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Giá: {product.price.toLocaleString()} ₫</p>

      <button onClick={handleAdd}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductDetail;
