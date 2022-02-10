import React,{Component} from "react";

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state= {
            items: [],
            textContent : ""
        };
    }
    textChange=(e)=>{
        this.setState(
            {textContent: e.target.value}
        );
    }
    addItems=()=>{
        let currentText = this.state.textContent;
        let currentItems = this.state.items;
        currentItems.push(currentText);
        this.setState({items: currentItems});
    }
    deleteItems=(k)=>{
        if(!window.confirm("Are you sure you want to delete?")){
            return false;
        }
        let currentItems = this.state.items;
        currentItems.splice(k,1);
        this.setState({items: currentItems});
    }
    render(){
        
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-4">
                        <div className="form-group">
                            <br/> <label>Username</label>
                            <input type="text" onChange={this.textChange} className="form-control" />
                        </div> <br/>
                        <div className="form-group">
                            <button onClick={this.addItems} className="btn btn-primary" >Add</button>
                        </div>
                        <ul>
                            { this.state.items.map((item,k)=>{
                            return <li key={k}>{item} <button className="btn btn-danger" onClick={()=>{this.deleteItems(k)}}>Delete</button></li>
                            })
                            }
                        </ul>
                    </div> 
                </div>
            </div>
        );
    }
}

export default ToDoList;