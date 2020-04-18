import React from "react";
import axios from "axios";
import SpeakerCard from "../src/SpeakerCard";

const SpeakersPage = ({ speakersData }) => (
  <div className="container">
      <div className="card-deck">
        {speakersData.map((speaker) => (
          <SpeakerCard speaker={speaker} />
        ))}
      </div>
  </div>
);

SpeakersPage.getInitialProps = async () => {
  const response = {
    hasErrored: false,
    message: "",
    speakersData: {},
  };

  try {
    const data = await axios.get("http://localhost:4000/speakers");
    response.speakersData = data.data;
  } catch (e) {
    response.message = e.message;
    response.hasErrored = true;
  }

  return { ...response };
};

export default SpeakersPage;