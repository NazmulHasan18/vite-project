import React, { useEffect, useState } from "react";

const Quotes = () => {
   const [quotes, setQuotes] = useState([]);
   useEffect(() => {
      fetch("https://type.fit/api/quotes")
         .then((res) => res.json())
         .then((data) => setQuotes(data));
   }, []);
   return (
      <div>
         <h2>Nazmul Hasan Shanto</h2>
         <p>Hi I am Here</p>
      </div>
   );
};

export default Quotes;
