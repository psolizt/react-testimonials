import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

function Testimonials() {
    const [testimonios, setTestimonios] = useState([]);

    useEffect(() => {
    const testimoniosData = require("../utils/data.json");
        setTestimonios(testimoniosData);
    }, []);
    
    return (
        <>
            {testimonios.map((testimonio,index)=> (
                <Testimonial key={index} imagen={testimonio.imagen} nombre={testimonio.nombre} pais={testimonio.pais} cargo={testimonio.cargo} empresa={testimonio.empresa} testimonio={testimonio.testimonio}/>
            ))}
        </>
    );
}

export default Testimonials;
