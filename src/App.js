import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Ryan Pina-silasse",
    location: "Champs-sur-Marne, FR",
    email: "ryanpinas77@gmail.com",
    status: "Étudiant en développement web",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
