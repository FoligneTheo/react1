// import React, { useState } from 'react';
// import './VoletAbout.scss';

// const VoletAbout = () => {
//   const [openValue, setOpenValue] = useState(null);

//   const values = [
//     { title: "Fiabilité", content: "Contenu sur la fiabilité..." },
//     { title: "Respect", content: "Contenu sur le respect..." },
//     { title: "Service", content: "Contenu sur le service..." },
//     { title: "Sécurité", content: "Contenu sur la sécurité..." }
//   ];

//   const toggleValue = (index) => {
//     setOpenValue(openValue === index ? null : index);
//   };

//   return (
//     <div className="accordion">
//       {values.map((value, index) => (
//         <div
//           key={index}
//           className={`accordion__item ${
//             openValue === index ? 'accordion__item--active' : ''
//           }`}
//         >
//           <div
//             className="accordion__header"
//             onClick={() => toggleValue(index)}
//           >
//             <span className="accordion__title">{value.title}</span>
//             <span className="accordion__icon">
//               {openValue === index ? '▲' : '▼'}
//             </span>
//           </div>

//           {openValue === index && (
//             <div className="accordion__content">
//               {value.content}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VoletAbout;
