import React from "react";
import "./subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "../stateprovider/Stateprovider";

function Subtotal() {
  const [{ basket, user }, disPatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotalButton">Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
