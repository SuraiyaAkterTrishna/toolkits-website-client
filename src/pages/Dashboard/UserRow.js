import React from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://toolkits.up.railway.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>*</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default UserRow;
