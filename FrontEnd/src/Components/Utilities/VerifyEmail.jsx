// VerificationNotification.js

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const VerifyEmail = () => {
  const {Token} = useParams()
  const [loading, setloading] = useState(true)
  const [Verifydata, setVerifydata] = useState({})
  const [message, setMessage] = useState("")
  const [error, seterror] = useState(null)
  useEffect(() => {
    const verifymail = async () =>{
      setloading(true)
      try{
        const response = await axios.post(`http://localhost:8000/api/user/verify/email`,{Token})
      setVerifydata(response.data.verifiedUser)
      setMessage(response.data.message)
      console.log(response.data)
      
      setloading(false)
      }catch(err){
        seterror(err.response.data.message)
        setloading(false)
       

      }
    }

    verifymail()
  }, [])




  sessionStorage.setItem('user', JSON.stringify(Verifydata))

  
  return (
   <Container>
     <Row>
       <Col md={6} className="mx-auto">
         <Card>
           <Card.Body>
             <Card.Title>Email Verification</Card.Title>
             {loading? <p>Loading...</p> :
             <p>{error ? error : message}</p>}
             <Button variant="primary" href={`/`}>Go to dashboard</Button>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
  );
};

export default VerifyEmail;
