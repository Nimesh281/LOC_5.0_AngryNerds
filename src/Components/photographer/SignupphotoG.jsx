import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Box, Container } from "@mui/system";
import login from "../../assets/images/login.png";
import { Link, Typography } from "@mui/material";

function SignupphotoG() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          col="10"
          md="6"
        >
          <img
            src={login}
            class="img-fluid"
            alt="Phone image"
            style={{ height: "70vh" }}
          />
        </MDBCol>
        <MDBCol style={{marginTop:"20"}} col="2" md="4">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            {/* <a href="!#">Forgot password?</a> */}
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">
            Register
          </MDBBtn>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6">Already have an account ?</Typography>
            <Link sx={{}} align="center" variant="h5">
              Sign In
            </Link>
          </Box>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee" }}
          >
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignupphotoG;
