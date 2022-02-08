import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../service/CustomerService";


function DeleteCustomer() {
    
    let { userId } = useParams();
    const navigate = useNavigate();
    let service = new CustomerService();
    
    useEffect(() => {
        
        service.deleteCustomer(userId).then(() => {
            
            alert(`Application with id ${userId} is deleted.`);
            navigate('/customer/view');
        }).catch((error) => {
            
        })
    })
    return (
        <div className="alert alert-danger">Application with id = {userId} deleted.</div>
    );
}
export default DeleteCustomer;