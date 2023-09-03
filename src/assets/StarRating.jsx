/* eslint-disable react/prop-types */

const StarRating = (props) => {

   const {rating, Star} = props

   const repeatedComponents = Array.from({ length: rating }, (value, index) => (
    <div key={index}>{Star}</div>
  ));


  return (


    <div>   
   

 <div className="flex gap-2 mt-2">
    
    {repeatedComponents}
    </div>;
        
    </div>
  )
}

export default StarRating