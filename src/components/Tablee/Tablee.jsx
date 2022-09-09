import React from "react";
import {Col,Container, Row,} from "react-bootstrap";
import { GrandTotalrow } from "../GrandTotalrow/GrandTotalrow";
import {Marks} from "../Marks/Marks";
import {Total} from "../Total/Total";
import Part2 from "./Part2";
import {Part4} from "./Part4";

export const Tablee = () => {
  
  return (
    <>
      <Container className="border primary mt-4">
        
        <Row className="mt-2">
          <Col className=" text-center border">
            <h3 style={{color:"red"}}>First Terminal Examination 2018-2019</h3>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className=" text-center border">
            <h3>Academic Performance</h3>
          </Col>
        </Row>

        <Row className="mt-2 border">
          <Col className=" text-center border" sm={{span:12}} md={{span:7}}>
            <Row className="border">
              <h5 style={{ color: "blue" }}>Part-I -:Scholastic Areas</h5>
            </Row>
            <Row className="mt-1">
              <Col className=" text-center border fw-bold p-2" xs lg="1">
                Sr.No
              </Col>
              <Col
                className=" text-center border fw-bold text-Black"
                xs
                lg="2"
              >
                Subjects
              </Col>
              <Col className=" text-center border" xs lg="9">
                <Row>
                  <Col className=" text-center border fw-normal p-1">FA</Col>
                  <Col className=" text-center border fw-normal p-1">Oral1</Col>
                  <Col className=" text-center border fw-normal p-1">BA</Col>
                  <Col className=" text-center border fw-normal p-1">Oral2</Col>
                  <Col className=" text-center border fw-normal fs-6 p-1">
                    Total
                  </Col>
                </Row>
                <Total />
             </Col>
            </Row>
            <Marks/>
            <GrandTotalrow/>
            </Col>
          <Col className="  border-primary      ">
            <Row className="border text-center">
              <h5 style={{ color: "blue" }}>Part-II :-Co-Scholastic Areas</h5>
            </Row>
         <Part2/>
        
          </Col>
          <h3 style={{textAlign:"center" ,marginTop:"20px"}}>Part III Attendance</h3>
        </Row>
        <Row className="justify-content-md-center">
        <Part4 />
        </Row>
        <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bold" }}>
          <p >C.G.P: 9.5</p>
          <p >Grade:8.1</p>
           </div>
        <div style={{ fontWeight:"bold"}}>Teacher's Remarks:- Excellent</div>

        
       <br />
       <br /> <h4 style={{textAlign:"center"}}>GRADING SCALE</h4>


<Row className="justify-content-md-center">
  <Col md={{ span: 6}}>
  
 
<Row className="text-center">
    <Col  className="border fw-bold">MARKS RANGE</Col>
    <Col  className="border fw-bold">GRADES</Col>
    <Col  className="border fw-bold">REMARKS</Col>
  </Row>
  <Row className="text-center">
    <Col className="border ">91-100</Col>
    <Col className="border ">A1</Col>
    <Col className="border ">Excellent</Col>
  </Row>
  <Row className="text-center">
    <Col  className="border ">81-90</Col>
    <Col  className="border ">A2</Col>
    <Col  className="border ">Very Good</Col>
  </Row>
  <Row className="text-center">
    <Col  className="border ">71-80</Col>
    <Col  className="border ">B1</Col>
    <Col  className="border ">Good</Col>
  </Row>
  <Row className="text-center">
    <Col  className="border ">61-70</Col>
    <Col className="border ">B2</Col>
    <Col className="border ">Satisfactory</Col>
  </Row>
  <Row className="text-center">
    <Col  className="border ">61-70</Col>
    <Col  className="border ">B2</Col>
    <Col  className="border ">Satisfactory</Col>
  </Row>
  
  <Row className="text-center">
    <Col  className="border ">41-50</Col>
    <Col  className="border ">C2</Col>
    <Col  className="border ">UnSatisfactory</Col>
  </Row>
  <Row className="text-center">
    <Col  className="border ">Below 40</Col>
    <Col  className="border ">D</Col>
    <Col  className="border ">Fail</Col>
  </Row>
  </Col>
</Row>
      </Container>
    </>
  );
};

