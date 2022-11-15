import React from "react";
//import { motion } from 'framer-motion';
import './card2.css';

import CardBuilder from '../../components/CardBuilder';

const Card = () => {
  return (
    <main>
      <div className="card-container">
        <p className="header">"Create your Perfect Business Card"</p>
      </div>

      <CardBuilder/>
    </main>
  );


};


export default Card;