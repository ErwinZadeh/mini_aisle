import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class MyList extends Component {

    state = {
        itemsArray: []
    }

    componentDidMount = () => {
        this.getAllItems()
    }

    getAllItems = () => {
        axios({
            method: 'GET',
            url: '/myList'
        }).then((response) => {
            console.log('this is repsonse', response.data);
            this.setState({
                itemsArray: response.data
            });
        }).catch((error) => {
            console.log(error);
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

    // handleStoresClick = () => {
    //     this.props.history.push('/Stores')
    // }

    render() {
        return (
            <div>
                <header><h1>Items in order of Category</h1></header>

                {/* <section>
                    <button onClick={this.handleAddItemClick}>Add Item</button>
                    <button onClick={this.handleStoresClick}>Stores</button>
                </section> */}

                {/* <ul>
                    {
                        this.state.itemsArray.map((itemsArray, i) =>
                            <li key={i}>
                                {itemsArray.item_name}, 
                                {itemsArray.amount},
                                {itemsArray.amount_id},
                                {itemsArray.category_id},
                                {itemsArray.store_id},
                                {itemsArray.status
                                    ?<>Done</>
                                    :<>TO Do</>
                                }

                                <button onClick={ () => this.editButton(itemsArray.id) }>Edit</button>,
                                <button name={itemsArray.id} onClick={(event)=>this.deleteButton(event, itemsArray.id)}>Delete</button>
                            </li>
                        )
                    }
                </ul> */}

                <table className="itemTable">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Unit</th>
                            <th>Store</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.itemsArray.map((itemsArray) => (
                            <tr key={itemsArray.id}>

                                <td>{itemsArray.item_name}</td>
                                <td>{itemsArray.amount}</td>
                                <td>{itemsArray.amount_unit}</td>
                                <td>{itemsArray.store}</td>
                                <td>{itemsArray.category}</td>

                                <td><button name={itemsArray.id} onClick={(event) => this.deleteButton(event, itemsArray.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default MyList;

