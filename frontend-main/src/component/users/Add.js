// import React, { useState } from "react";
// import CommonModal from "../../shared/CommonModal";
// import Form from "react-bootstrap/Form";
// import { addUsers } from "./api";

// const Add = ({ addUserModal, setAddUserModal }) => {
//   const [data, setData] = useState([]);

//   const addUserOnClick = async () => {
//    await addUsers("/users",{
//       firstName: "hhhhh",
//       lastName: "hhhhh-hhhhh",
//       email: "hhhhh@hhhhh.com",
//       gender: "male",
//     })
//       .then((res) => {
//         // setData(res.data);
//       return setData((prevData) => [...prevData, JSON.stringify(res)]);

//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   };

//   console.log(data);
//   return (
//     <CommonModal
//       modalTitle="User add"
//       show={addUserModal}
//       onClick={addUserOnClick}
//       onHide={() => setAddUserModal(false)}
//     >
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter email" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Gender</Form.Label>
//           <Form.Select aria-label="Default select example">
//             <option>Select Gender</option>
//             <option value="1">Male</option>
//             <option value="2">FeMale</option>
//           </Form.Select>{" "}
//         </Form.Group>
//       </Form>
//     </CommonModal>
//   );
// };

// export default Add;

import React, { useState } from "react";
import CommonModal from "../../shared/CommonModal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addUsers } from "./api";

const Add = ({ addUserModal, setAddUserModal }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addUserOnClick = async (e) => {
    e.preventDefault();
    try {
      const response = await addUsers(formData);
      console.log(response);
      console.log(formData, response, "resresres");
      setFormData(response.data);
      setAddUserModal(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Form method="post" onSubmit={addUserOnClick}>
      <CommonModal
        modalTitle="User add"
        show={addUserModal}
        // onClick={addUserOnClick}
        onHide={() => setAddUserModal(false)}
      >
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            name="gender"
            aria-label="Select Gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
        </Form.Group>
      </CommonModal>

    </Form>
  );
};

export default Add;
