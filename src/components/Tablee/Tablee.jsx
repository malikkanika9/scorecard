import React from "react";
import {Col,Container, Row,} from "react-bootstrap";
import { GrandTotalrow } from "../GrandTotalrow/GrandTotalrow";
import {Marks} from "../Marks/Marks";
import {Total} from "../Total/Total";
import Part2 from "./Part2";

import  "./Table.css"
import Grade from "./Grade";

export const Tablee = () => {
  
  return (
    <>
      <Container className="border primary mt-4  border-secondary"  id="iconBorder">
        
        <Row className="mt-2">
          <Col className=" text-center border-end border-secondary">
            <h3 style={{color:"red"}}>First Terminal Examination 2018-2019</h3>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className=" text-center border-top border-secondary">
            <h3>Academic Performance</h3>
          </Col>
          
        </Row>

        <Row className="mt-2  border-secondary">
          <Col className=" text-center border-secondary border" sm={{span:12}} md={{span:7}}>
            <Row className="border">
              <h5 style={{ color: "blue" }}>Part-I -:Scholastic Areas</h5>
            </Row>
            <Row className="mt-1">
              <Col className=" text-center border-secondary border-top fw-bold p-2" xs lg="1">
                Sr.No
              </Col>
              <Col
                className=" text-center border-start border-top border-bottom border-secondary fw-bold text-Black"
                xs
                lg="2"
              >
                Subjects
              </Col>
              <Col className=" text-center border border-secondary" xs lg="9">
                <Row>
                  <Col className=" text-center border-secondary border fw-normal p-1">FA</Col>
                  <Col className=" text-center border-secondary border fw-normal p-1">Oral1</Col>
                  <Col className=" text-center border-secondary border fw-normal p-1">BA</Col>
                  <Col className=" text-center border-secondary border fw-normal p-1">Oral2</Col>
                  <Col className=" text-center border-secondary border fw-normal fs-6 p-1">
                    Total
                  </Col>
                </Row>
                <Total />
             </Col>
            </Row>
            <Marks/>
            <GrandTotalrow/>
            </Col>
          <Col className="  border-primary  border-secondary    ">
            <Row className="border text-center border-secondary">
              <h5 style={{ color: "blue" }}>Part-II :-Co-Scholastic Areas</h5>
            </Row>
         <Part2/>
        
          </Col>
         
        </Row>
        <Row className="justify-content-md-center border-secondary">
        
        </Row>
<br />
<br />

   <Grade/>
      </Container>
    </>
  );
};

