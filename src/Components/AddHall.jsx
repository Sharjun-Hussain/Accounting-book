import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import ValidateForm from 'form-validation-react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';

export const AddHall = () => {

    const navigate = useNavigate();
    const [Location, setLocation] = useState('');
    const [HallName, setHallName] = useState('');
    const [Price, setPrice] = useState('');

    const [Capacity, setCapacity] = useState('');
    const [amenities, setAmenities] = useState([]);

    const HandleCheck = (event) => {

        const { value, checked } = event.target


        if (checked) {
            setAmenities(e => [...e, value])


        }
        else (
            setAmenities(e => {
                return [...e.filter(ev => ev !== value)]
            })
        )

    }
     console.log(amenities);


    const HandleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("/admin/api/halls/add", JSON.stringify({ HallName, Location, Capacity, amenities, Price }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data.message);
        })
            .catch(error => {
                console.log(error);
            });

            
            navigate("/admin/dashboard/") 
       
    }


    return (
        <Container>
            <Row>
                <Col>

                    <div><h3>List Hall</h3></div>
                    <div>

                        <Form onSubmit={HandleSubmit} >
                            <Container className='mt-5'>
                                <Row>
                                    <Col>
                                        <div>
                                            <label  htmlFor="validationCustom01" className="form-label">Hall Name</label>
                                            <input type="text" className="form-control" id="validationCustom01" value={HallName} onChange={(e) => setHallName(e.target.value)} required ></input>

                                        </div>
                                        <div >
                                            <label  htmlFor="validationCustom01" className="form-label">Location</label>
                                            <input type="text" className="form-control" id="validationCustom01" value={Location} onChange={(e) => setLocation(e.target.value)} required ></input>

                                        </div>
                                        <div>
                                            <label  htmlFor="validationCustom01" className="form-label">Capacity</label>
                                            <input type="number" name="Name" className="form-control" id="validationCustom01" value={Capacity} onChange={(e) => setCapacity(e.target.value)} required></input>

                                        </div>
                                        <div>
                                            <label  htmlFor="validationCustom01" className="form-label">Price</label>
                                            <input type="text" name="Name" className="form-control" id="validationCustom01" value={Price} onChange={(e) => setPrice(e.target.value)} required></input>

                                        </div>
                                    </Col>
                                    <Col>

                                    <label  htmlFor="validationCustom01" className="form-label">Amentities : (Select Facilities of The Hall)</label>
                                        <div className='d-flex flex-column' id="validationCustom01" style={{fontSize:"18px", }}>
                                            <label className='mb-1'> <input type="checkbox" id="amenities1" name="amenities" value="Parking facilities" onChange={HandleCheck}></input>Parking facilities</label>
                                            <label className='my-1'> <input type="checkbox" id="amenities2" name="amenities" value="Tables and chairs" onChange={HandleCheck}></input>Tables and chairs</label>
                                            <label className='my-1'> <input type="checkbox" id="amenities3" name="amenities" value="Sound system and speakers" onChange={HandleCheck}></input>Sound system and speakers</label>
                                            <label className='my-1'> <input type="checkbox" id="amenities4" name="amenities" value="Stage or platform" onChange={HandleCheck}></input>Stage or platform</label>


                                            <label className='my-1'> <input type="checkbox" id="amenities5" name="amenities" value="Lighting and special effects" onChange={HandleCheck}></input>Lighting and special effects</label>
                                            <label className='my-1'> <input type="checkbox" id="amenities6" name="amenities" value="Lighting and special effects" onChange={HandleCheck}></input>Lighting and special effects</label>
                                            <label className='my-1'> <input type="checkbox" id="amenities7" name="amenities" value="Catering and kitchen facilities" onChange={HandleCheck}></input>Catering and kitchen facilities</label>
                                            <label className='my-1'> <input type="checkbox" id="amenities8" name="amenities" value="Cleaning and maintenance services" onChange={HandleCheck}></input>Cleaning and maintenance services</label>
                                        </div>

                                    </Col>

                                </Row>
                            </Container>
                            <Button type="submit"  >Add Hall</Button>
                        </Form>


                    </div>
                </Col>
            </Row>
        </Container>
    )
}
