export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");

  if (!token) return <Navigate to="/" />;

  if (!userStr) return <Navigate to="/" />;

  const user = JSON.parse(userStr);
  const userRole = user?.role?.name?.trim().toUpperCase();

  console.log("USER ROLE:", userRole);
  console.log("REQUIRED ROLE:", role);

  if (role && userRole !== role) {
    return <Navigate to="/Home" />;
  }

  return children;
}