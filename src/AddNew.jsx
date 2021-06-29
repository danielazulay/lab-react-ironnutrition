
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';



class AddNew extends React.Component{


    state = {

        
        isValid: false,
    
    }


  

    handleClick=()=>{

      
        if (this.state.isValid === false) {
            this.setState({ isValid: !this.state.isValid });
            this.setState({ style:"visibel"});
          } else {
            this.setState({ isValid: false });
            this.setState({ style:"hidden"});
          }
      
     
    }

    render(){
return(




          <div>
  
        
        
              
               
                <input
                  type="text"
                  placeholder="insert a image of your food"

                  name={this.props.name}
                 
                 
                  onChange={this.props.handleAdd}
                ></input>
           
     
      
          </div>
    
      );
    }
  


    }



export default AddNew