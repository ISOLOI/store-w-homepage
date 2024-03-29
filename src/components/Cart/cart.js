import "../../styles.css";
import { useCartAndWishListContext } from "../../contexts/cart-wishlist-context";

export default function ({ cartItems }) {
  const { state } = useCartAndWishListContext();

  return (
    <div>
      {" "}
      {state.itemsInCartArray.map((item) => (
        <div
          style={{
            display: "flex",
            height: "auto",
            width: "60%",
            margin: "auto",
            marginTop: "4rem",
            backgroundColor: "#F3F4F6",
            padding: "1rem"
          }}
        >
          <img
            className="responsive-image"
            src={item.image}
            style={{ height: "8rem", width: "auto", marginRight: "2rem" }}
          />
          <div
            className="description"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}
          >
            <div className="itemName" style={{ fontWeight: "bold" }}>
              {item.name}
            </div>
            <div>
              <div
                className="itemBrand"
                style={{ color: "#878787", marginBottom: "0.5rem" }}
              >
                {item.brand}
              </div>
              <div className="itemMaterial" style={{ color: "#878787" }}>
                {item.material}
              </div>
            </div>
            <div>
              <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
                {" "}
                Rs. {item.price}
              </span>
              <span>{item.offer}</span>
            </div>
          </div>
          <div className="extras"></div>
        </div>
      ))}
    </div>
  );
}
