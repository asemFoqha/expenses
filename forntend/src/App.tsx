import "./app.css";
import RoutesComponent from "./components/routs/RoutesComponent";
import AuthContextComponent from "./components/auth/AuthContextComponent";

function App() {
  return (
    <AuthContextComponent>
      <RoutesComponent />
    </AuthContextComponent>
  );
}

export default App;
