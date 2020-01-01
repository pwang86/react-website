import React from "react";
import "./Introduction.css";
import feature1 from "../images/book.jpg";
import feature2 from "../images/penguin.jpg";
import feature3 from "../images/town.jpg";

function Introduction() {
  return (
    <div className="introduction">
      <section className="feature left">
        <a href="#" className="feature-image">
          <img src={feature1} alt="book" />
        </a>
        <div className="feature-content">
          <h3>Feature 1</h3>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna vitae.
          </p>
        </div>
      </section>
      <section className="feature right">
        <a href="#" className="feature-image">
          <img src={feature2} alt="penguin" />
        </a>
        <div className="feature-content">
          <h3>Feature 2</h3>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna vitae.
          </p>
        </div>
      </section>
      <section className="feature left">
        <a href="#" className="feature-image">
          <img src={feature3} alt="town" />
        </a>
        <div className="feature-content">
          <h3>Feature 3</h3>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna vitae.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
