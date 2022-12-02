import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`).then((res) =>
        res.json().then((data) => {
          setAdminLoading(false);
          setIsAdmin(data.isAdmin);
        })
      );
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
