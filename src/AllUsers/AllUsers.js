import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (email) => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user);
  };

  return (
    <div>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Index</th>

              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers?.map((list, i) => (
                <tr>
                  <th>{i + 1}</th>

                  <td>
                    <p className="text-orange-500 font-bold">{list?.name}</p>
                  </td>
                  <td>
                    <p className="text-blue-500 font-bold">$ {list?.email}</p>
                  </td>
                  <td>
                    <p className="text-blue-500 font-bold">{list?.typ}</p>
                  </td>
                  <td>
                    {list?.role !== "admin" ? (
                      <button onClick={() => handleMakeAdmin(list?.email)}>
                        Make Admin
                      </button>
                    ) : (
                      <p>Admin</p>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(list)}>X</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
