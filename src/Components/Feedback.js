import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Feedback extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            feedback: "",
            reserve:[]
        }
        
    }

 handleChange = (event) =>{
      
        console.log("Onchange", event.target.value)
        this.setState({
          [event.target.name]:event.target.value
        });
    }
    handleSubmit = (event)=>{
        alert("Feedback sent to us... Thank you!");
        event.preventDefault();
        console.log(event)
    
        let formData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            feedback: this.state.feedback 
    
        }
        console.log(formData)
      
    this.postAPI(formData);
    }
    
    
    postAPI = async (formData) =>{
        console.log(formData)
        try{
            
                const response = await axios.post("https://cors-anywhere.herokuapp.com/https://boiling-ocean-50857.herokuapp.com/sindhu_api/v1/employee", formData
                );
                console.log(response.data)
            }
    
        catch(e){
                console.log("Error", e)
            }
        }  
    
    render() {
    return(
        <React.Fragment>
            <div className= "feedback-form" style={{maxWidth: "50rem", margin:"auto", marginTop: "5%"}} responsive>
               <div className="form-div-review ">
                 <div>
                 <h4 className= "font-weight-bold" id="review-heading" >FEEDBACK</h4>
                 </div>
            

                 <div>
                   <form onSubmit={this.handleSubmit} >
                    <label className="label-review text-dark font-weight-bold">
                    First Name </label>
                    <input className="input-review-fname text-dark" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/>
                    <br/><br/>
                    <label className="label-review text-dark font-weight-bold">
                    Last Name </label>
                    <input className="input-review-lname text-dark" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"/>
                    <br/><br/>
                    <label className="label-review text-dark font-weight-bold">
                    Email </label>
                    <input className="input-review-email text-dark" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email address"/>
                    <br/><br/>
                    <label className="label-review text-dark font-weight-bold">
                    Feedback </label>
                    <input className="input-review-feedback text-dark" type="text" name="feedback" value={this.state.feedback} onChange={this.handleChange} placeholder="Feedback"/>            
                    <br/><br/>
                    
                    <div className="card-body">
                    <button className="btn btn-dark text-light ">Submit</button>
                                  
                                      </div>
                 
                    
                    </form>
                   </div>
                      
                    </div>
                    </div>
    
  </React.Fragment>
    )
}
}