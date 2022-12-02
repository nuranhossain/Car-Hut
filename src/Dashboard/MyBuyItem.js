import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const MyBuyItem = () => {
  const { user } = useContext(AuthContext);
  const [buyingList, setBuyingList] = useState([]);
  const url = `http://localhost:5000/buying?email=${user?.email}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => setBuyingList(data));
  //   const { data: buyingList = [] } = useQuery({
  //     queryKey: ["buying", user?.email],
  //     queryFn: () => async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       return data;
  //     },
  //   });

  return (
    <div>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Seller Email</th>
            </tr>
          </thead>
          <tbody>
            {buyingList &&
              buyingList?.map((list, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>
                    <img src={list?.img} alt="" className="w-[60px] rounded" />
                  </td>
                  <td>
                    <p className="text-orange-500 font-bold">{list?.carName}</p>
                  </td>
                  <td>
                    <p className="text-blue-500 font-bold">
                      $ {list?.carPrice}
                    </p>
                  </td>
                  <td>
                    <p className="text-blue-500 font-bold">
                      {list?.sallerEmail}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyItem;
