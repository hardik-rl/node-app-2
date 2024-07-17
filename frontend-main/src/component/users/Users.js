import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Add from "./Add";
import { useAuth } from "../AuthContext";
import api from "../../shared/api/api";
import useLogin from "../../shared/store/useLogin";

const Users = () => {
  const { isAuthenticated } = useAuth();
  const { setIsLogin } = useLogin();
  const [data, setData] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);

  const getUserList = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLogin(true);
      return setData(response.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    getUserList();
  }, []);

  return (
    <div className="m-5">
      <div className="text-end">
        <Button className="mb-4" onClick={() => setAddUserModal(true)}>
          Add User
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button size="sm" variant="secondary">
                    Edit
                  </Button>
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Add addUserModal={addUserModal} setAddUserModal={setAddUserModal} />
    </div>
  );
};

export default Users;
