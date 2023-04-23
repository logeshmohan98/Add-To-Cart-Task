import React from "react";

//  let data = [
//   {
//     tag : "",
//     title: "Fancy Product",
//     star: false,
//     discount: "",
//     price: "$40.00 - $80.00",
//     cart: false,
//   },
//   {
//     tag : "Sale",
//     title: "Special Item",
//     star: true,
//     discount: "$20.00",
//     price: "$18.00",
//     cart: true,
//   },
//   {
//     tag : "Sale",
//     title: "Sale Item",
//     star: false,
//     discount: "$50.00",
//     price: "$25.00",
//     cart: true,
//   },
//   {
//     tag : "",
//     title: "Popular Item",
//     star: true,
//     discount: "",
//     price: "$40.00",
//     cart: true,
//   },
//   {
//     tag : "",
//     title: "Sale Item",
//     star: false,
//     discount: "$50.00",
//     price: "$25.00",
//     cart: true,
//   },
//   {
//     tag : "",
//     title: "Fancy Product",
//     star: false,
//     discount: "",
//     price: "$120.00 - $280.00",
//     cart: false,
//   },
//   {
//     tag : "Sale",
//     title: "Special Item",
//     star: true,
//     discount: "$20.00",
//     price: "$18.00",
//     cart: true,
//   },
//   {
//     tag : "",
//     title: "Popular Item",
//     star: true,
//     discount: "",
//     price: "$40.00",
//     cart: true,
//   },
// ];


//   function Card() {
//     return (
//       <div class="col mb-5">
//             <div class="card h-100">
//               <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{data.tag}</div>
//               <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
//               <div class="card-body p-4">
//                 <div class="text-center">
//                   <h5 class="fw-bolder">{data.title}</h5>
//                   <div class="d-flex justify-content-center small text-warning mb-2"></div>
//                   <span class="text-muted text-decoration-line-through">{data.discount}</span>{data.price}
//                 </div>
//               </div>
//               <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                 <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
//               </div>
//             </div>
//           </div>
//     );
//   }



// export default Card;


import { useState } from 'react';

function CartButton() {
  const [count, setCount] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCartClick = () => {
    setCount(count + 1);
    setIsAddedToCart(true);
  };

  const handleRemoveClick = () => {
    setCount(count - 1);
    setIsAddedToCart(false);
  };

  const buttonText = isAddedToCart ? 'Remove' : 'Add to Cart';

  return (
    <div>
      <button onClick={isAddedToCart ? handleRemoveClick : handleAddToCartClick}>
        {buttonText}
      </button>
      <button>
        Cart ({count})
      </button>
    </div>
    
  );
}

export default CartButton;