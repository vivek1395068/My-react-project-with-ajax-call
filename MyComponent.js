import React , {Component} from 'react';
class MyComponent extends Component{
    constructor(){
        super()
        this.state={
            squareRoot:[],
            data:[]
        }
    }

    Handle = function(DataStore){
        this.setState({
            data: DataStore.map(function(objective,index){debugger
                console.log(objective)
                return objective
            })
        })
    }
    
    ajaxCallRequest=function(){
        var DataStore=[];
        var xhttp= new XMLHttpRequest();
        var temp=this; 
        xhttp.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
                DataStore.push(this.responseText)
                console.log(DataStore)
                temp.setState({
                    data: DataStore.map(function(object,index){
                        console.log(object)
                        return object
                    })
                })
            }  
        }        
        xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
        xhttp.send();
    }
    onClickHandle= function(){
        var square = [4,9,16,25];
         this.setState({
             squareRoot: square.map(Math.sqrt)
         })
    }
    componentWillMount(){
        this.setState({
            squareRoot:[]
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.ajaxCallRequest.bind(this)}>getData</button><br/>
                {this.state.data}
                <hr/>
            </div>
        )
    }
}

export default MyComponent;