import React from "react";
import { Link } from "react-router-dom";
import CustomerService from "../service/CustomerService";

function ViewCustomer(){
    let service= new CustomerService();
    const[state, changeState]=React.useState([]);
    React.useEffect( ()=>{
        service.viewCustomer().then((data) => {
                changeState(data.data)
            })
        },[])
    return(
        
            <div>
                {state.length > 0 ?
                  (<table className="table table-bordered">
                      <thead>
                          <tr>
                          <th>User Id</th>
                              <th>Customer Name</th>
                              <th>Mobile Number</th>
                              <th>Email Id</th>
                             
                              <th>Update</th>
                              <th>Delete</th>
                          </tr>
                      </thead>
                      <tbody>
                          {state.map(
                              (c)=>(
                                  <tr>
                                      <td>{c.userId}</td>
                                      <td>{c.customerName}</td>
                                      <td>{c.mobileNumber}</td>
                                      <td>{c.emailId}</td>
                                     
                                      <td><Link className="btn btn-warning" to={{ pathname: `/customer/update/${c.userId}` }}>Update</Link></td>
                                      <td><Link className="btn btn-danger" to={{ pathname: `/customer/delete/${c.userId}` }}>Delete</Link></td>

                                  </tr>
                              )
                          )}
                      </tbody>
                  </table>) : 
                  <span className="text-danger">No Customer present</span>}
                
            </div>
        
    )
}
export default ViewCustomer;