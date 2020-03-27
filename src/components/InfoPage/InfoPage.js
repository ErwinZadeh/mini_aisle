import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'




class InfoPage extends Component {

  state={items:'',
  objectToSend:{description:'',
                image_url:''
                }
}
  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios.get('/api/shelf')
      .then(response => {
        console.log('response is', response.data)
        this.setState({
          items:response.data})
      });
  }

  handleChange =(event, propertyName)=>{ 
    this.setState({
      ...this.state,
      objectToSend:{...this.state.objectToSend,
        [propertyName]:event.target.value}
    })

  }

  handleClick=()=>{
    let payload =  this.state.objectToSend;
    console.log('in handleClick, post');
    axios.post('/api/shelf', payload)
      .then(response => {
        console.log('response is', response)
        this.getItems();
      });
    
  }

  deleteBtn=(event, name)=>{
    console.log('in deleteBtn', event.target.name);
    let id = event.target.name;
    axios.delete(`/api/shelf/${id}`)
      .then(response => {
        console.log('response is', response)
        this.getItems();
      });
  }
  

  render() {
    return (

  <div>
        <input onChange={(event) => this.handleChange(event, "description")} placeholder="Add Description"></input>
        <input onChange={(event) => this.handleChange(event, "image_url")} placeholder="Add Image Url"></input>
        <button onClick ={this.handleClick}>Add Item</button>
    <ul>
      {this.state.items &&
      this.state.items.map(item=>(<li key={item.id}>{item.description}<button name={item.id} onClick={this.deleteBtn}>Delete</button></li>))}
    </ul>
 

  </div>
);

    }
  }
    export default connect()(InfoPage)
