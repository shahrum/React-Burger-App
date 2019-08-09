import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import cls from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log('jan', this.props.ingredients);

        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render () {
        return (
            <div className={cls.ContactData}>
                <h4>Ente your contact data</h4>
                <form>
                    <input className={cls.Input} type="text" name="name" placeholder="Your name..." />
                    <input className={cls.Input} type="text" name="email" placeholder="Your email..." />
                    <input className={cls.Input} type="text" name="street" placeholder="Your street..." />
                    <input className={cls.Input} type="text" name="postal" placeholder="Your postal code..." />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;