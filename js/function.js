
// async function getDate(url) {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// }

// function createDateils(product) {
// return `
// <div class="container main__container">
//     <div class="image">
//         <img src="${product.attributes.image}" alt="">
//     </div>
//     <div class="info">
//        <h2>${product.attributes.title}</h2>
//        <h3>${product.attributes.company}</h3>
//        <h3>$${product.attributes.price}</h3>
//         <p>${product.attributes.description}</p>

//         <form>
//         <select id="select">
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         </select>
//          <button id="button">Add to bag</button>
//   </form>
//     </div>


//     </div>
// `
// }

// function getDatestorage() {
// let data = [];
// if(localStorage.getItem('products')){
//     data = JSON.parse(localStorage.getItem('products'))
// }
// }

// // function createCard(product) {
// //   return `
// //   <div class="wraper">
// //                 <div class="p">
// //                     <p class="a">
// //                         <i class="fa-solid fa-x"> </i>
// //                         <span>${product.category}</span>
// //                     </p>
// //                     <p class="pp">
// //                         SALE
// //                     </p>
// //                     <div class="podarka">
// //                         <img src="./img/gift 1.svg" alt="">
// //                         <p>Подарок</p>
// //                     </div>
// //                     <img class="nima" src="${product.image}" alt="">
// //                 </div>
// //                 <div class="k">
// //                     <div class="reyting">
// //                         <div class="imglarr">
// //                             <img src="./img/рейтинг.svg" alt="">
// //                             <p>(12) отзывов</p>
// //                         </div>
// //                         <div class="ii">
// //                             <p class="variat">Вариативный замок Golden Soft для отеля</p>
// //                             <p class="skidka">
// //                                 <span class="yangi">7 000₽</span>
// //                                 <span class="eski">8 000₽</span>
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 </div>
// //   `
// // }
// export {getDate, createCard, createDateils, getDatestorage};
