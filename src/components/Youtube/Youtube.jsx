import React, { useState } from "react";
import "./youtube.css";
import YoutubeVIdeo from "./YoutubeVideo/YoutubeVIdeo";
import YoutubeCarusel from "./YoutubeCarusel/YoutubeCarusel";
const Youtube = () => {
  const [modal ,setModal] = useState(false)
  return (
    <>
      

      <section className="youtube-section">
        <div className="container">
          <div className="youtube-section__wrapper">
            <h2>Откройте для себя вековые традиции</h2>
            <h3>
              И наслаждайтесь процессом пивоварения, ведь с Баварией - это
              просто
            </h3>
            <YoutubeVIdeo />
            <YoutubeCarusel setModal2={setModal} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
