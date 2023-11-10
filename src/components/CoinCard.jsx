const CoinCard = ({ coinPrice, btcPrice }) => {
  return (
    <li className="text-xl flex justify-center items-center">
      <img
        className="w-12 inline-block"
        src={`./images/${coinPrice.market.substring(4)}.png`}
        alt={`${coinPrice.market.substring(4)}`}
      />
      <span className="ml-2 w-16 inline-block">
        {coinPrice.market.substring(4)}
      </span>
      <span className="ml-2">
        ₩{" "}
        {coinPrice.market.substring(0, 3) === "BTC"
          ? (coinPrice.trade_price * btcPrice).toFixed(2)
          : coinPrice.trade_price.toLocaleString()}
        원
      </span>
    </li>
  );
};

export default CoinCard;
