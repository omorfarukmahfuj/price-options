import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-[#4D6BF2] rounded-3xl p-4 text-white flex flex-col justify-between">
      <div className="mb-5">
        <h2 className="text-center my-6 text-xl">{name}</h2>
        <h1 className="text-5xl  text-center font-black mb-4">{price}</h1>
        <ul className="list-disc mx-5">{features.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
      </div>
      <button className="btn btn-accent">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object
}
export default PriceOption;