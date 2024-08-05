export const Products = ({ imageUrl, header, description }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt="" />
      <div className="product-details">
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
