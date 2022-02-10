import React, {Component} from "react"; 
import {Card,Button} from 'react-bootstrap';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Card className="text-center">
                    <Card.Header>React App</Card.Header>
                    <Card.Body>
                        <Card.Title>This is the Home Page</Card.Title>
                        <Card.Text>
                        A sampe react app with form submit and a to do app with routing using react bootstrap.
                        </Card.Text>
                        
                    </Card.Body>
                   
                </Card>
            </div>
        )
        
    }
}

export default Home;