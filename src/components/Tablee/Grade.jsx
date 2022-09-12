import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import result from "../data/db.json"

const Grade = () => {
  return (
    <>
              <Row className='fw-bold'> 
                <Col className='text-center fw-bold'>PART-lll Attendence</Col>
            </Row>

            <Row>
                <Col   className="border border-secondary fw-bold text-center m-2" >
                    <Row className='border-bottom border-secondary'>
                        <Col md={3} sm={3} xs={3} className="border-end fw-bold border-secondary">
                            
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end fw-bold border-secondary">
                            No. of Working Days
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end  fw-bold border-secondary">
                            No. of Days Present
                        </Col>
                        <Col md={3} sm={3} xs={3} className="text-xs-start fw-bold">
                            Percentage
                        </Col>
                    </Row>
                    <Row >
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary fw-bold">
                            TERM - l
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary">
                            83
                        </Col>
                        <Col md={3} sm={3} xs={3} className="border-end border-secondary fw-bold">
                            83
                        </Col>
                        <Col md={3} sm={3} xs={3} >
                            100
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row>
                <Col>
                <Row>
                    <Col xs={{span:4}}  className=' fw-bold'>C.G.P: 9.6</Col>
                    <Col xs={{span:3 ,offset:5}} className="text-end fw-bold">Grade: A1</Col>
                </Row>
                <Row>
                    <Col xs={{span:4}} className=' fw-bold'>
                        Teacher's Remarks - Excellent
                    </Col>
                </Row>
                </Col>
            </Row>


            <Row className='mt-5'>
                <Col>
                  <Row>
                     <Col xs={{span:3}} className=' fw-bold'>
                     Signature
                     </Col>
                     <Col xs={{span:6}} className="text-center  fw-bold fs-italic">
                     parent's Signature
                     </Col>
                     <Col xs={{span:3}} className=' fw-bold'>
                     Parent's  Signature
                     </Col>
                  </Row>
                  <Row className='border-start border-end border-top'>
                    <Col xs={{span:6, offset:3}} className="text-center fw-bold fs-3">
                        GRADING SCALE
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={{span:10, offset:1}} md={{span:6, offset:3}} className='border border-secondary'>
                        <Row className="border-bottom border-secondary">
                            <Col sm={4} xs={4}className="border-end border-secondary fw-bold text-center">
                                MARKS RANGE
                            </Col>
                            <Col sm={4} xs={4}className="border-end border-secondary fw-bold text-center">
                                GRADES
                            </Col>
                            <Col sm={4} xs={4}className="text-center  fw-bold">
                                REMARKS
                            </Col>
                        </Row>
                        {
                            result.part_3.map((item,i)=> <Row key={Date.now()+Math.random()} className='border-bottom border-secondary'>
                            <Col sm={4} xs={4}className="border-end border-secondary className=' fw-bold' text-center">
                                {item.marks_range}
                            </Col>
                            <Col sm={4} xs={4}className="border-end border-secondary  text-center">
                                {item.grade}
                            </Col>
                            <Col sm={4} xs={4} >
                                {item.remarks}
                            </Col>
                            </Row>)
                        }
                    </Col>
                  </Row>

                </Col>
            </Row>
            <Row className="border-top border-secondary text-center">
                <Col className=' fw-bold'>
                 Our Parents are seen Good on the Earth
                </Col>
            </Row>

    </>
  )
}

export default Grade