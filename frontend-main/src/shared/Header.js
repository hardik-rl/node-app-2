import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../component/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/esm/Button";
import useLogin from "./store/useLogin";

function Header() {
  const { logout, isAuthenticated } = useAuth();
  const { setIsLogin } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isAuthenticated) {
      localStorage.removeItem("authToken");
      toast.error("User Logout Successfully");
      logout();
      setIsLogin(false);
      navigate("/login");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Button
              variant="default"
              className="border-0"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
