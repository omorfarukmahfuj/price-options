import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 29.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 49.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Access to group classes",
        "1 personal training session per month"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 69.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Access to group classes",
        "4 personal training sessions per month",
        "Access to spa and sauna",
        "Nutrition consultation",
        "Priority class booking",
        "Towel service",
        "Access to premium workout gear"
      ]
    },
    {
      "id": 4,
      "name": "VIP",
      "price": 99.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Access to group classes",
        "Unlimited personal training sessions",
        "Access to spa and sauna",
        "Complimentary gym merchandise",
        "Priority customer support",
        "Nutrition consultation",
        "Priority class booking",
        "Towel service",
        "VIP lounge access",
      ]
    }
  ];

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-indigo-950 mt-10">Price Options: </h1>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-4 gap-6 w-5/6 mx-auto">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </>
  );
};

export default PriceOptions;