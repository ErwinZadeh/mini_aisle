import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class AddItem extends Component {

    state = {
        newItem: {
            itemName: '',
            amountNumber: '',
            amountUnit: '',
            category: '',
            shoppingStore: ''
        }
    }

    handleItemChange = (propertyName, event) => {
        console.log('value: ', event.target.value)

        this.setState({
            newItem: {
                ...this.state.newItem,
                [propertyName]: event.target.value
            }
        })
    }

    handleAddItemClick = (event) => {
        event.preventDefault();
        console.log(`Adding Item`, this.state.newItem);
        // TODO - axios request to server to add item
        axios({
            method: 'POST',
            url: '/item',
            data: this.state.newItem
        }).then((reponse) => {
            console.log('response', reponse);
            alert('Item was added to your list!');
            
        }).catch((error) => {
            alert(`Couldn't submit responses at this time`);
            console.log('Error posting to server', error)
        })
    }

    handleMyListClick = () => {
        this.props.history.push('/MyList')
    }

    handleStoresClick = () => {
        this.props.history.push('/Stores')
    }

    render() {
        return (
            <div>
                <header><h1>Add Item</h1></header>
                <form onSubmit={this.handleAddItemClick}>

                    <label>Name of Item: </label>
                    <input placeholder="item name" type="text" value={this.state.newItem.itemName}
                        onChange={(event) => this.handleItemChange('itemName', event)} /><br />

                    <label>Amount: </label>
                    <input placeholder="amount" type="number" value={this.state.newItem.amountNumber}
                        onChange={(event) => this.handleItemChange('amountNumber', event)} />

                    <label> Unit: </label>
                    <select className="unit-select" name="unit" placeholder="unit" type="text" 
                        value={this.state.newItem.amountUnit}
                        onChange={(event) => this.handleItemChange('amountUnit', event)}>
                       <option value="None">Choose the unit</option>
                       <option value="pcs">pcs</option>
                       <option value="oz">oz</option>
                       <option value="Ib">Ib</option>
                       <option value="gal">gal</option>
                       <option value="qt">qt</option>
                       <option value="Other">Other</option>
                    </select><br />

                    {/* <input placeholder="unit" type="text" value={this.state.newItem.amountUnit}
                        onChange={(event) => this.handleItemChange('amountUnit', event)} /><br /> */}

                    <label> Category: </label>
                    <select className="category-select" name="category" placeholder="category" type="text" 
                        value={this.state.newItem.category}
                        onChange={(event) => this.handleItemChange('category', event)}>
                       <option value="None">Choose the category</option>
                       <option value="Dairy">Dairy</option>
                       <option value="Meat">Meat</option>
                       <option value="Tinned Can">Tinned Can</option>
                       <option value="Fruit and Vegetable">Fruit and Vegetable</option>
                       <option value="Drink">Drink</option>
                       <option value="Frozen">Frozen</option>
                       <option value="Baked">Baked</option>
                       <option value="Candy">Candy</option>
                       <option value="Houseware">Houseware</option>
                       <option value="10">Other</option>
                    </select><br />

                    {/* <input placeholder="category" type="text" value={this.state.newItem.category}
                        onChange={(event) => this.handleItemChange('category', event)} /><br /> */}

                    <label>Store: </label>
                    <select className="store-select" name="store" placeholder="store" type="text" 
                        value={this.state.newItem.shoppingStore}
                        onChange={(event) => this.handleItemChange('shoppingStore', event)}>
                       <option value="None">Choose the store</option>
                       <option value="Aldi">Aldi</option>
                       <option value="Target">Target</option>
                       <option value="Walmart">Walmart</option>
                       <option value="Cub Foods">Cub Foods</option>
                       <option value="Costco">Costco</option>
                       <option value="Sam's Club">Sam's Club</option>
                       <option value="Trader Joe's">Trader Joe's</option>
                       <option value="Hy-Vee">Hy-Vee</option>
                       <option value="Whole Foods">Whole Foods</option>
                       <option value="Kowalsky">Kowalsky</option>
                       <option value="Lunds">Lunds & Byerlys</option>
                       <option value="Fresh Thyme">Fresh Thyme</option>
                       <option value="Other">Other</option>
                    </select><br />

                    {/* <input placeholder="store" type="text" value={this.state.newItem.shoppingStore}
                        onChange={(event) => this.handleItemChange('shoppingStore', event)} /><br /> */}

                    <button type="submit">ADD ITEM</button><br />
                </form>

                <footer>
                    <button onClick={this.handleMyListClick}>My List</button>
                    <button onClick={this.handleStoresClick}>Stores</button>
                </footer>

            </div>
        )
    }
}

export default AddItem;