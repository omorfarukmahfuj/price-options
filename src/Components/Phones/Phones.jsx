import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((response) => {
        const phoneData = response.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          let price = 0; // Default price if parsing fails or slug is not present
          if (phone.phone && phone.phone.slug) {
            const slugParts = phone.phone.slug.split("-");
            if (slugParts.length > 1) {
              price = parseInt(slugParts[1]);
            }
          }
          return {
            name: phone.phone_name,
            price: price,
          };
        });
        setPhones(phonesWithFakeData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error state or display an error message
      });
  }, []);

  return (
    <div className="mt-20">
      <div className="w-11/12 h-96 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={phones}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Phones;
