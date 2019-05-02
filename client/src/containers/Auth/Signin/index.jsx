import React from "react";
import { Row, Col } from "antd";
import SigninForm from "../../../components/Auth/SigninForm";
import style from "./index.module.scss";

const Signin = () => {
  return (<Row>
    <Col 
      xs={{span: 14, offset: 5}}  
      sm={{span: 12, offset: 6}} 
      md={{span: 10, offset: 7}} 
      lg={{span: 8, offset: 8}} 
      xl={{span: 6, offset: 9}} 
      >
      <div className={style.signinFormWrapper}>
        <SigninForm />
      </div>
    </Col>
  </Row>);
};

export default Signin;