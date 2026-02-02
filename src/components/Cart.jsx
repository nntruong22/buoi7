import { useNavigate } from "react-router-dom";

function Cart({ cartItems }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Giỏ hàng</h1>

      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index}>
              {item.name} - {item.price.toLocaleString()} ₫
            </div>
          ))}

          <button onClick={() => navigate("/checkout")}>
            Thanh toán
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
