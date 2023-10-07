import React from "react";
import "./PartnersAndSponsors.css";

function PartnersAndSponsors() {
  return (
    <div className="partnersAndSponsors_container">
      <div className="pas_header_container">
        <h2 className="pas_header">Partners and Sponsors</h2>
        <div className="pas_subheader">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </div>
      </div>
      <div className="pas_content_container">
        <div className="pas_content_body">
          <div className="pas_content_top">
            <div className="pas_logo top_logo_01"></div>
            <div className="pas_logo_divider"></div>
            <div className="pas_logo top_logo_02"></div>
            <div className="pas_logo_divider"></div>
            <div className="pas_logo top_logo_03"></div>
          </div>
          <div className="pas_horizontal_divider">
            <div className="horizontal_divider"></div>
            <div className="horizontal_divider"></div>
            <div className="horizontal_divider"></div>
          </div>
          <div className="pas_content_top">
            <div className="pas_logo bottom_logo_01"></div>
            <div className="pas_logo_divider"></div>
            <div className="pas_logo bottom_logo_02"></div>
            <div className="pas_logo_divider"></div>
            <div className="pas_logo bottom_logo_03"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersAndSponsors;
