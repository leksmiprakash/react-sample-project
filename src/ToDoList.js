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
        let currentItems = this.state.items;
        currentItems.splice(k,1);
        this.setState({items: currentItems});
    }
    render(){
        
        return(
            <div className="">
               <input type="text" onChange={this.textChange}/>
               <p> {this.state.textContent}</p>
               <button onClick={this.addItems}>Add</button>
               <ul>
                    { this.state.items.map((item,k)=>{
                        return <li key={k}>{item} <button onClick={()=>{this.deleteItems(k)}}>Delete</button></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ToDoList;