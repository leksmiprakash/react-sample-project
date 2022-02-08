import axios from "axios";
import React,{Component} from "react";

class FormInsert extends Component{
    constructor(props){
        super(props);
        this.state= {
            uname : '',
            name: '',
            pswrd : '',
            enable: false,
            textContent:''
        };
    }
    inputSet=(e)=>{ 
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }
    inputPass=(e)=>{ 
        this.setState(
            {
                textContent:e.target.value,
                [e.target.name]: e.target.value
            }
        );
    }
    register=(e)=>{ 
        e.preventDefault();
        var dat= {
            uname : this.state.uname,
            name: this.state.name,
            pswrd :this.state.pswrd
        };
        axios.post('http://localhost/api/api.php',dat).then(response=>{
            alert(response);
        })
    }
    checkClicked=(e)=>{
        
        this.setState((prev,props)=>(
            {enable:!prev.enable}
        ));
    }
    // e used to get the event content 
    
    render(){
        return(
            <div className="container">
               <h3>Registration</h3>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.inputSet} className="form-control" name="uname" />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={this.inputSet} className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.inputPass} className="form-control" name="pswrd" />
                        <p>Show Password <input type="checkbox" onClick={this.checkClicked} /></p>
                        <p>Password : {this.state.enable? this.state.textContent : ""}</p> 
                    </div>
                    <div className="form-group">
                        <button onClick={this.register} className="btn btn-primary" name="send" >Sign Up</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default FormInsert;