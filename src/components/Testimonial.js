import React from "react";
import parse from "html-react-parser";
import '../css/Testimonial.css';

function Testimonial({imagen, nombre, pais, cargo, empresa, testimonio}) {
  return(
    <div className="testimonial">
      <img className="image" src={require(`../images/${imagen}.png`)} alt={`Foto de ${imagen}`}/>
      <div className="content-testimonial">
        <p className="name"><strong>{nombre}</strong> en {pais}</p>
        <p className="position">{cargo} en <strong>{empresa}</strong></p>
        <p className="description">"{parse(testimonio)}"</p>
      </div>
    </div>
  );
}

export default Testimonial;