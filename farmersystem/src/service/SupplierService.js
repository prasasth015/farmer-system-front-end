import axios from 'axios';

const SUPPLIER_API_BASE_URL = "http://localhost:8061/api/v1/createSupplier";

class SupplierService {
    
    login(farmerUserName,farmerPassword){
        return axios.get(SUPPLIER_API_BASE_URL, +'/'+farmerUserName+"/"+farmerPassword);
    }

    createSupplier(supplier) {
        return axios.post(SUPPLIER_API_BASE_URL, supplier);
    }
}
export default new SupplierService()