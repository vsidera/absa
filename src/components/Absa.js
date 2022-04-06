import axios from 'axios';
import React , {useState, useEffect} from 'react'
import qs from 'qs';
import { useParams } from 'react-router-dom';

export default function Absa() {

  const [result, setResult] = useState(null);

  const [checkout, setCheckout] = useState(null);

  const {uuid} = useParams();

  const absa = async () => {
    try{
      let res = await axios.get(`http://payment.localhost/api/v1/payments/absa/signed_data/${uuid}`)

      setResult(res.data);
    } catch (e) {
      console.log(e)
    }
  }

  ;

  useEffect (() =>{
    absa()
  },[])

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}


const qs = require('qs');


  const postData = (e) =>{
    e.preventDefault();
    axios.post('https://testsecureacceptance.cybersource.com/pay',

  qs.stringify({ ...result }),
  
  {
    headers: headers
  }
  ).then(response => {

    if (!response.data){
      throw Error("ERROR");  
    }
    let responseHtml = response.data;
    
   //open the new window and write your HTML to it
    var myWindow = window.open("", "response", "resizable=yes");
    myWindow.document.write(responseHtml);
   
  })
  .catch(error => console.log(error));
  
  };

  return (
    <div>
      <div className="user">
      <div className="container-fluid">
        <div className="row">
          {/* <h1>ABSA DATA</h1> */}
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
          <h1>ABSA DATA</h1>
          <table>
        <tbody>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
            
          </tr>
          <tr>
            <td>Access Key:</td>
             {result !== null && <td>{result['access_key']}</td>}
          
          </tr>
          <tr>
            <td>Profile Id:</td>
            {result !== null && <td>{result['profile_id']}</td>}
          
          </tr>
          <tr>
            <td>Transaction Uuid:</td>
            {result !== null && <td>{result['transaction_uuid']}</td>}
          
          </tr>

          <tr>
            <td>Unsigned Field Names:</td>
            {result !== null && <td>{result['unsigned_field_names']}</td>}
          
          </tr>
          <tr>
            <td>Date Time:</td>
            {result !== null && <td>{result['signed_date_time']}</td>}
          
          </tr>
          <tr>
            <td>Locale:</td>
             {result !== null && <td>{result['locale']}</td>}
          
          </tr>
          <tr>
            <td>Transaction Type:</td>
            {result !== null && <td>{result['transaction_type']}</td>}
          
          </tr>
          <tr>
            <td>Reference Number:</td>
            {result !== null && <td>{result['reference_number']}</td>}
          
          </tr>
          <tr>
            <td> Amount:</td>
             {result !== null && <td>{result['amount']}</td>}
          
          </tr>
          <tr>
            <td>Currency:</td>
            {result !== null && <td>{result['currency']}</td>}
          
          </tr>
          <tr>
            <td>Submit:</td>
            {result !== null && <td>{result['submit']}</td>}
          
          </tr>
          <tr>
            <td>Signature:</td>
            {result !== null && <td>{result['signature']}</td>}
          
          </tr>
  
        </tbody>
  
        </table>
        <button className="button" onClick={postData}>CONFIRM</button>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>  
      
  
    </div>
       
      
    </div>
    
  )
}
