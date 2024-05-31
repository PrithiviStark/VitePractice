import "./App.css";
import { ProfileCard } from "./Components/ProfileCard";
import { ReactLogoBox } from "./Components/ReactLogoBox";
import profilePic from "./assets/images/Prithivi-pic.jpg";

function App() {
  return (
    <>
      <ProfileCard
        profilePic={profilePic}
        name="PrithiviRajan E"
        role="Java Developer"
        email="prithivirajan5945@gmail.com"
        skills={[
          "Java",
          "Spring Boot",
          "Spring MVC",
          "Spring JPA",
          "PostSQL",
          "MySQL",
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "JSP",
          "React",
          "Git",
          "Jenkins",
        ]}
      />
    </>
  );
}

export default App;
