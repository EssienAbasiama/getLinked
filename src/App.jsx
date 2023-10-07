import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import TheBigIdea from "./components/TheBigIdea/TheBigIdea";
import RulesAndGuidiance from "./components/RulesAndGuidiance/RulesAndGuidiance";
import JudgingCriteria from "./components/JudgingCriteria/JudgingCriteria";
import Faq from "./components/FAQ/Faq";
import TimeLine from "./components/Timeline/TimeLine";
import PrizeAndReward from "./components/PrizeAndRewars/PrizeAndReward";
import PartnersAndSponsors from "./components/PartnersAndSponsors/PartnersAndSponsors";
import PrivacyPolicyAndTerms from "./components/PrivacyPolicyAndTerms/PPT";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <TheBigIdea />
      <RulesAndGuidiance />
      <JudgingCriteria />
      <Faq />
      <TimeLine />
      <PrizeAndReward />
      <PartnersAndSponsors />
      <PrivacyPolicyAndTerms />
      <Footer />
    </>
  );
}

export default App;
