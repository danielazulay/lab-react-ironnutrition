
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodBox from './FoodBox';
import React from 'react';
import AddNew from './AddNew';
import './App.css';
import foods from './foods.json';

class Buk extends React.Component{


    state = {

        comida:"",
       calories:"",
       url:"",
  
clone:''
    
    }
 

  
    handleAdd=(event)=>{


        this.setState({ [event.target.name]: event.target.value });
      
    }


    handleclick=(event)=>{

const obj ={ 'name':this.state.name,'calories':this.state.calories,'url':this.state.url}
      const clone = [...foods]

      clone.push(obj)
      this.setState({ foods: clone});
      event.preventDefault(event)
        console.log(clone)
    }
    render(){
return(



        <div>
      
<form>
         <AddNew
      value={this.state.comida}
   
      handleAdd={this.handleAdd}
        
        />
        <AddNew
          value={this.state.calories}
   
          handleAdd={this.handleAdd}
    
        />
        <AddNew
         value={this.state.url}
    
          handleAdd={this.handleAdd}
    
        />



<button type='submit' onClick={this.handleclick}>New Food</button>
</form>
  
<li className="list-group-item">
<div className="container">
<div className="row">
<div className="col-6">
<ul className="list-group">

<FoodBox  
name={this.state.name}
calories={this.state.calories}
url={this.state.url}
/>

</ul>
</div>
</div>
</div>
</li>
        </div>
      );
    }
  


    }



export default Buk