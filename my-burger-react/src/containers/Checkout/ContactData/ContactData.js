import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import cls from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

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

        this.setState({ loading: true });
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
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={cls.Input} type="text" name="name" placeholder="Your name..." />
                <input className={cls.Input} type="text" name="email" placeholder="Your email..." />
                <input className={cls.Input} type="text" name="street" placeholder="Your street..." />
                <input className={cls.Input} type="text" name="postal" placeholder="Your postal code..." />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={cls.ContactData}>
                <h4>Ente your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;