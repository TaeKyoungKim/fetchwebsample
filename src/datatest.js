import React, {Component} from 'react'


export default class DataTest extends Component {
    constructor(props){
        super(props)
        this.state={
            member : [{balance :"This is message"}],
        }
    }

    _postMember =()=>{
        fetch('http://localhost:3000/api/Member',{
            method:'POST',
            headers :{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                
                    "$class": "org.acme.vehicle.auction.Member",
                    "balance": 5000,
                    "email": "pari@mail.mail",
                    "firstName": "Toms",
                    "lastName": "Kim"
                 
            })
            
        })
        .then(res =>{res.json()})
        .then(responseData =>{
            console.log(responseData)
        })
        .catch(error =>{
                console.error(error)
        })
    }

    _postVehicle =()=>{
        fetch('http://localhost:3000/api/Vehicle',{
            method:'POST',
            headers :{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                "$class": "org.acme.vehicle.auction.Vehicle",
                "vin": "Benz",
                "owner": "resource:org.acme.vehicle.auction.Member#james@mail.mail"
              })
            
        })
        .then(res =>{res.json()})
        .then(responseData =>{
            console.log(responseData)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/Member',{
            method:'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resData =>{
            console.log(resData[0]['$class']);
            console.log(resData[0].balance);
            this.setState({
                member :resData
            })          
        })
        .catch(error =>{
            console.log('Error is :' ,error )
        })
    }

    render(){
        return (
            <div style={{fontSize:20}}>
            {this.state.member[0].$class}
            {this.state.member[0].balance}
            {this.state.member[0].email}
            
            <button onClick={()=>{this._postMember()}}>맴버추가버튼</button>
            <button onClick={()=>{this._postVehicle()}}>자동차추가버튼</button>
            </div>

        )
    }

}

