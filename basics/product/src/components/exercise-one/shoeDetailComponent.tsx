import "./shoeDetails.css";

type shoeDetailProps = {
  shoeName: string;
  shoePrice: number;
  shoeColor?: string;
};
const ShoeDetailComponent = ({
  shoeName,
  shoePrice,
  
}: shoeDetailProps) => {
  return (
    <div className="shoe-details">
      <div className="product-name">
        <h4>{shoeName}</h4>
      </div>
      <div className="more-info">
        <p>More info</p>
      </div>

      <div className="product-description">
        <p>PRODUCT DESCRIPTION</p>
      </div>
      <div className="lines">
        <hr />

        <hr />
        <hr />
      </div>
      <div className="colors-title"><p>COLORS</p></div>
      <div className="colors">
        <p className="col black"></p>
         <p className="col orange"></p>
        <p className="col blue"></p>
        <p className="col yellow"></p>
        <p className="col red"></p>
      </div>

      <div className="colors-title"><p>SIZE</p></div>
      <div className="sizes">
        <p className="size">40</p>
        <p className="size">41</p>
        <p className="size">42</p>
        <p className="size">43</p>
        <p className="size">44</p>
        <p className="size">45</p>
      </div>
      <div className="price-buy-section">
        <button className="buy-button">BUY</button>
        <div className="shoe-price">
          <p> €{shoePrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetailComponent;
