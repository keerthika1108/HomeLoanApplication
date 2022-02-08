import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Customer from "../model/Customer";
import CustomerService from "../service/CustomerService";


function UpdateCustomer() {
    const [state, setState] = React.useState({ customer: new Customer() });
    let service = new CustomerService();
    const { userId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        service.viewCustomerById(userId).then((result) => {
            setState({ customer: result.data })
        }).catch((error) => {
            alert(error);
        })
    }, []);
    return (
        <div>
            <form>
                <div>
                    <label>User Id</label>
                    <input className="form-control" type="text" id="userId" name="userId"
                        defaultValue={state.customer.userId}
                        readOnly={true}
                    />
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input className="form-control" type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter Mobile Number"
                        value={state.customer.mobileNumber}
                        onChange={(e) => setState({ customer: { ...state.customer, mobileNumber: e.target.value } })}
                    />
                </div>
                <div>
                    <label>Email Id</label>
                    <input className="form-control" type="text" id="emailId" name="emailId" placeholder="Enter emailId"
                        value={state.customer.emailId}
                        onChange={(event) => setState({ customer: { ...state.customer, emailId: event.target.value } })}
                    />
                </div>
                
                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        service.updateCustomer(state.customer).then(() => {
                            alert('Record is updated.');
                            setState({ customer: {} })
                            navigate('/customer/view');
                        }).catch((error) => {
                            alert(error);
                        })
                    }
                }>Update Customer</button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/customer/view'>Cancel</Link>
            </form>
        </div>
    );
}

export default UpdateCustomer;