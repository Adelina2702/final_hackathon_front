// import React, { useContext, useEffect } from "react";
// import * as yup from "yup";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
// import { productContext } from "../context/ProductContext";

// const EditPage = () => {

 
//   return (
//     <>
//     <div
//     style={{textAlign: "center", fontFamily: "'Patua One', cursive"}}
//     >
//       <h3>Изменить продукт</h3>
//     </div>
//   <div style={{
//       display: "flex",
//       justifyContent: "center",
//       width: "100%"
//   }}>
//     <div
//     >
//         <input
//          style={{display: "flex", textAlign: "center",
//          justifyContent: "center",
//          minWidth: "100%",
//          margin: "10px 10px 0px 0px",
//          padding: "8px",
//          fontFamily: "'Patua One', cursive"}}
//       type="text"
//           name="img"
//           placeholder="Изображение"
//           onChange={handleChange}
//           value={inputs.img}    
//         />
//       <input
//        style={{display: "flex", textAlign: "center",
//        justifyContent: "center",
//        minWidth: "100%",
//        margin: "10px 10px 0px 0px",
//        padding: "8px",
//        fontFamily: "'Patua One', cursive"}}
//         type="text"
//         name="name"
//         placeholder="Название"
//         onChange={handleChange}
//         value={inputs.name}
//       />
//       <input
//        style={{display: "flex", textAlign: "center",
//        justifyContent: "center",
//        minWidth: "100%",
//        margin: "10px 10px 0px 0px",
//        padding: "8px",
//        fontFamily: "'Patua One', cursive"}}
//         type="text"
//         name="category"
//         placeholder="Категория"
//         onChange={handleChange}
//         value={inputs.category}
//         id=""
//       //   value={typeValue}
//       //   onChange={(e) => filterProducts("category", e.target.value)}
//       />

//       <input
//        style={{display: "flex", textAlign: "center",
//        justifyContent: "center",
//        minWidth: "100%",
//        margin: "10px 10px 0px 0px",
//        padding: "8px",
//        fontFamily: "'Patua One', cursive"}}
//         type="text"
//         name="composition"
//         placeholder="Состав"
//         onChange={handleChange}
//         value={inputs.composition}
//       />

//           <input
//            style={{display: "flex", textAlign: "center",
//            justifyContent: "center",
//            minWidth: "100%",
//            margin: "10px 10px 0px 0px",
//            padding: "8px",
//           //  fontFamily: "'Patua One', cursive"
//           }}
//             type="number"
//             name="price"
//             placeholder="Цена"
//             onChange={handleChange}
//             value={inputs.price}
//           />

//       <button
//       style={{
//       width: "100%",
//       border: "none",
//       padding: "12px 20px",
//       backgroundColor: "#00BBB4",
//       color: "white",
//       cursor: "pointer",
//       textAlign: "center",
//       marginTop: "10px",
//       fontFamily: "'Patua One', cursive"
//       }}
//       onClick={handleClick}>Сохранить</button>
//       </div>
//       </div>
//    </>
//   );
// };

// export default EditPage;