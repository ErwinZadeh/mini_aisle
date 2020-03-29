import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class Stores extends Component {

    state = {
        itemsArray: []
    }

    componentDidMount = () => {
        this.getAllItems()
    }

    getAllItems = () => {
        axios({
            method: 'GET',
            url: '/item'
        }).then((response) => {
            console.log('this is repsonse', response.data);
            this.setState({
                itemsArray: response.data
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    editButton = (id, status) => {
        let newStatus = !status;
        
        axios.put(`/item/${id}`, {key: newStatus})
          .then(response => {
            console.log('back from PUT/server:', response);
            this.getAllItems();
          })
          .catch( error => {
            console.log('Error in put', error);
            alert('Could not update item at this time. Try again later.');
          })
    }    
    
    deleteButton = (event) => {
        console.log("delete me!", event.target.name);
        axios.delete(`/item/${event.target.name}`)
            .then((response) => {
                alert('Item was deleted from your list!');
                console.table('in /item delete', response);
                this.getAllItems();
            }).catch((err) => {
                console.log(err);
                alert(err)
            })
    }


    // handleAddItemClick = () => {
    //     this.props.history.push('/')
    // }

    // handleMyListClick = () => {
    //     this.props.history.push('/MyList')
    // }

    render() {
    
        return (
            <div>
                <header><h2>Items in order of Stores</h2></header>

                {/* <section>
                    <button onClick={this.handleAddItemClick}>Add Item</button>
                    <button onClick={this.handleMyListClick}>My List</button>
                </section> */}

                <table className="itemTable">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Unit</th>
                            <th>Category</th>
                            <th>Store</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.itemsArray.map((itemsArray) => (
                            <tr key={itemsArray.id}>
                                {/* I just replaced the name of the current 
                                "To Do/Done" button with below "conditional rendering" */}
                                <td><button onClick={ () => this.editButton(itemsArray.id, itemsArray.status) }>{itemsArray.status?<>Done</>:<>To do</>}</button></td>
                                {/* This is conditional rendering. 
                                Means;
                                if "True" or "?" render "Done", 
                                if ":" or "False" render "ToDo" */}

                                {/* {itemsArray.status
                                    ? <td>Done</td>
                                    : <td>To do</td>
                                } */}

                                <td>{itemsArray.item_name}</td>
                                <td>{itemsArray.amount}</td>
                                <td>{itemsArray.amount_unit}</td>
                                <td>{itemsArray.category}</td>
                                <td>{itemsArray.store}</td>

                                <td><button name={itemsArray.id} onClick={(event)=>this.deleteButton(event, itemsArray.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Stores;
