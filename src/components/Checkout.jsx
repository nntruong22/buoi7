import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Thanh toán</h1>
      <button
        onClick={() => {
          alert("Đặt hàng thành công!");
          navigate("/");
        }}
      >
        Xác nhận
      </button>
    </div>
  );
}

export default Checkout;
