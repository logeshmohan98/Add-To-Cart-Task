import React from 'react'
import Card from './Card'

export default function DisplayCard() {

const cardDetails=[
    {
        name:"Fancy Product",
        price:"$40.00 - $80.00",
        options:"View options"
    },
    {
        name:"Special Item",
        strikeout:"$18.00",
        price:"$18.00",
        options:"Add to cart"
    },
    {
        name:"Sale Item",
        strikeout:"$50.00",
        price:"$25.00",
        options:"Add to cart"
    },
    {
        name:"Popular Item",
        price:"$40.00",
        options:"Add to cart"
    },
    {
        name:"Sale Item",
        strikeout:"$50.00",
        price:"$25.00",
        options:"Add to cart"
    },
    {
        name:"Fancy Product",
        price:"$120.00 - $280.00",
        options:"View options"
    },
    {
        name:"Special Item",
        strikeout:"$20.00",
        price:"$18.00",
        options:"Add to cart"
    },
    {
        name:"Popular Item",
        price:"$40.00",
        options:"Add to cart"
    }

]

  return (
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Card/>                
                </div>
            </div>
        </section>  
  )
}