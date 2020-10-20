import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
  const push =()=>{
      props.history.push('/Home')
  }
    return (
        <div>
            <h1>product</h1>
            <h2 onClick={push}>
             <p>lorem
               Despite the fact that, as Shakespeare said, "the pen is mightier than the sword," the pen itself is not enough to make an effective writer. In fact, though we may all like to think of ourselves as the next Shakespeare, inspiration alone is not the key to effective essay writing. You see, the conventions of English essays are more formulaic than you might think – and, in many ways, it can be as simple as counting to five.
             </p>
            </h2>
        </div>
    )
}

export default Product
