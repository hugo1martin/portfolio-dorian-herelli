import React from "react";

import Layout from "../components/layout/layout";

const AboutMe = () => {
  return (
    <Layout>
      <div className="content flex column">
        <div className="flex">
          <h1>DORIAN</h1>
          <h1 className="primary">&nbsp;HERELLI</h1>
        </div>
        <h2>Web Designer</h2>
        <span>
          Etudiant en 3e année de Design graphique & Numérique, j’aime
          l’illustration, le graphisme et l’intégration web.
        </span>
        <a
          href="./cv-dorian-herelli.pdf"
          target="_blank"
          className="button primary big"
        >
          Téléchargez mon CV
        </a>
      </div>
    </Layout>
  );
};

export default AboutMe;
