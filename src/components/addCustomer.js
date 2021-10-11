import React, { Component } from 'react';

const customStyle = {
    width: '100px',
    margin: '0 auto',
    padding: '10px',
    align:'centre'
}
class addCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerFirstName: '',
            customerLastName: '',
            customerBirth: '',
            customerPan:'',
            customerAdhar:'',
            customerIncome:'',
            customerMobile:'',
            customerPin:''
        }
        this.onClickAdd.bind(this);
    }

    onClickAdd = (event) => {
        // event.preventDefault();
        const { customerFirstName, customerLastName, customerBirth, customerPan, customerAdhar, customerIncome, customerMobile, customerPin} = this.state
        const formValues = {
            name: `${customerFirstName} ${customerLastName}`,
            birthdate: customerBirth,
            pan: customerPan,
            adahar: customerAdhar,
            income: customerIncome,
            mobile: customerMobile,
            pincode: customerPin
        }
        console.log(this.state);
        fetch('/api/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
        
    }
    

    render() {
        return (
            <div>

                <form style={customStyle} >
                    <label> First Name (As per PAN Card)
                    <input name="customerFirstName" type="text" required
                            value={this.state.customerFirstName} onChange={this.handleChange}
                        />
                    </label>
                    <label> Last Name (As per PAN Card)
                    <input name="customerLastName" type="text" required
                            value={this.state.customerLastName} onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>Birthdate<input name="customerBirth" type="date" required
                        value={this.state.customerBirth} onChange={this.handleChange}
                    />  </label>
                    <br />
                    <label> PAN Card <input name="customerPan" type="text" required
                        value={this.state.customerPan} onChange={this.handleChange}
                    />  </label>
                    <br />
                    <label> Adhaar Card <input name="customerAdhar" type="text" required
                        value={this.state.customerAdhar} onChange={this.handleChange}
                    />  </label>
                    <br />
                    <label> Net Monthly Income<input name="customerIncome" type="number"
                        value={this.state.customerIncome} onChange={this.handleChange}
                    />  </label>
                    <br />
                    <label>Registered Mobile Number<input name="customerMobile" type="tel" required pattern="[0-9]{10}"
                        value={this.state.customerMobile} onChange={this.handleChange}
                    />  </label>
                    <br />
                    <label>Pincode<input name="customerPin" type="number" required
                        value={this.state.customerPin} onChange={this.handleChange}
                    />  </label>
                    <br />
                    <button type="button" onClick={this.onClickAdd}>Check</button>
                </form>
            </div>
        );
    }
}

export default addCustomer;
