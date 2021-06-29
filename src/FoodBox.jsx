import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import foods from './foods.json';

class FoodBox extends React.Component{


    state = {

        foods2: [...foods],
    }


    
    handleAdd=(props)=>{




    }
    render(){
        this.handleAdd()
return(
<div>
 
    {foods.map((food)=>{
return(
    <li className="list-group-item">
    <div className="container">
    <div className="row">
    <div className="col">
   <img src={food.image} className="mr-2" alt="Cinque Terre" width="80" height="auto"/>
   </div>
   <div className="col-4">
 <p>
         <strong>{food.name}</strong> <br />
         <small>{food.calories}</small><br />
</p>
</div>
   <div className="col">
         <input className="input" type="number" value="1" />
     
         </div>
         <div className="col">
         <button type="button" className="btn btn-primary">
           +
         </button>
         </div>
         </div>
         </div>
 </li>
         

   
 

)
    })

    }
    </div>
   

)
    }
}

export default FoodBox