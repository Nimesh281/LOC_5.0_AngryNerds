import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CameraIcon from "@mui/icons-material/Camera";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container } from "@mui/system";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Dropdown from "./Dropdown";

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Professional photograher</p>
                <p className="text-muted mb-4">I have expertise in wedding photography</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn color="warning">Book NOW !</MDBBtn>
                  {/* <MDBBtn
                    outline
                    style={{ border: "1px solid warning" }}
                    className="ms-1"
                  >
                    Message
                  </MDBBtn> */}
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <LanguageIcon />
                    <MDBCardText>https://Alex123.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <CameraIcon />
                    <MDBCardText>Streetphotography</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <TwitterIcon />
                    <MDBCardText>@ALex.clicks</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <InstagramIcon />
                    <MDBCardText>@alex_clicks</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <FacebookIcon />
                    <MDBCardText>AlexSamuel</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Johnatan Smith
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      example@example.com
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      (097) 234-5678
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      (098) 765-4321
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Bay Area, San Francisco, CA
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-warning font-italic me-1">
                        EXPERTISED
                      </span>{" "}
                      shoot range
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Wedding
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Pre-wedding
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Interior
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Food
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Kids
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-warning font-italic me-1">
                        REVENUE
                      </span>{" "}
                      generated in each area
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      {" "}
                      Wedding
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Pre-Wedding
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Kids
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={49} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Foods
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={75} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Interior
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={36} valuemin={0} valuemax={100}/>
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: 15 ,m:5,backgroundColor:"primary",borderRadius:3}}>
          <Typography variant="h5" align="center">
            Uplaod Images
          </Typography>
          <Fab color="primary" sx={{ml:4}} aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
        <Box sx={{ mx: 15 }}>
          <Typography variant="h5">Premium Images Uplaod</Typography>
          <Fab sx={{ml:4}} color="primary" aria-label="add" alignItems="center">
            <AddIcon />
          </Fab>
        </Box>
        <Box sx={{ mx: 15 }}>
          <Typography variant="h5">CategoryWise Images</Typography>
          
            <Dropdown sx={{width:"10",mr:5}}/>
        </Box>
      </Container>
    </section>
  );
}
