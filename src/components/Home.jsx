function Home() {
  const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000 đ", image: "/iphone.jpg" },
    { id: 2, name: "Samsung S24", price: "22.000.000 đ", image: "/samsung.jpg" },
    { id: 3, name: "Xiaomi 13", price: "15.000.000 đ", image: "/xiaomi.jpg" },
    { id: 4, name: "OPPO Reno", price: "12.000.000 đ", image: "/oppo.jpg" },
  ];

  return (
    <>
    <h1>Trang bán hàng</h1>

<div className="container">
  <div className="product-list">
    {products.map((p) => (
      <div key={p.id} className="product-card">
        <img src={p.image} alt={p.name} />
        <h3>{p.name}</h3>
        <p>{p.price}</p>
        <a href="#">Xem chi tiết</a>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

export default Home;
