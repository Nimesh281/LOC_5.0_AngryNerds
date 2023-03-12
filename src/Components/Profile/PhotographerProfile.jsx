import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useSearchParams } from 'react-router-dom';
import axios from "../../axios"
import { useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';

function PhotographerProfile() {

    const location = useLocation();
    const [id, setId] = useState(location.state.id);

    const [categoryImages, setCategoryImages] = useState([{
        name: "prewedding",
        images: [
            'http://res.cloudinary.com/dr07lzbug/image/upload/v1678593595/640d44a9832a3249508095d3/Prewedding/wedding8.jpg.jpg',
            'http://res.cloudinary.com/dr07lzbug/image/upload/v1678593599/640d44a9832a3249508095d3/Prewedding/wedding9.jpg.jpg',
            'http://res.cloudinary.com/dr07lzbug/image/upload/v1678593602/640d44a9832a3249508095d3/Prewedding/wedding10.jpg.jpg',
            'http://res.cloudinary.com/dr07lzbug/image/upload/v1678593604/640d44a9832a3249508095d3/Prewedding/wedding11.jpg.jpg',
            'http://res.cloudinary.com/dr07lzbug/image/upload/v1678593606/640d44a9832a3249508095d3/Prewedding/wedding12.jpg.jpg'
        ]
    }]);

    const [data, setData] = useState({});


    const getData = async () => {
        const response = await axios({
            method: "GET",
            url: encodeURI(`api/photographer?id=${id}`),

        }).catch((error) => console.log(error));

        if (response) {
            console.log(response.data ? response.data : response.error);

            setData(response.data);

            // sessionStorage.setItem("User Data", JSON.stringify(response.data));
            // navigate("/login" ,{replace:true });
        }
    }

    // getImagesByCategoryu
    const getImageByCategory = async (category, id) => {
        const response = await axios({
            method: "GET",
            url: encodeURI(`api/category/imageByCategory?category=${category}&id=${id}`),
        })

        if (response) {
            //    categoryImages.category = response.data;
            setCategoryImages((cur) => cur.concat(response.data))
            // return response.data
        }
    }


    const getCategoryImages = () => {
        data?.categories?.map(async (category) => {
            await getImageByCategory(category, data._id);


        })
    }


    useEffect(() => {
        console.log(categoryImages)
    }, [categoryImages])



    useEffect(() => {
        if (id) {
            getData();
        }
        // getCategoryImages();


    }, [id])


    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#FFFFFF' }}>
            <MDBContainer className="py-5 h-100" sx={{ borderRadius: "20px" }}>
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard style={{ backgroundColor: "#F6E1C3", borderRadius: "20px" }}>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                    <MDBBtn outline color="dark" style={{ height: '50px', overflow: 'visible',fontSize:"14px" ,backgroundColor:"#6B3E26",color:"#FFF"}}>
                                        Book Shoot
                                    </MDBBtn>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">{data.name}</MDBTypography>
                                    <MDBCardText>Available At : {data?.avl_Locations?.map((loc) => { return <span>{loc} </span> })}</MDBCardText>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#F6E1C3' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <InstagramIcon />
                                        {/* <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText> */}
                                    </div>
                                    <div className="px-3">
                                        <WhatsAppIcon />
                                        {/* <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText> */}
                                    </div>
                                    <div>
                                        <TwitterIcon />
                                        {/* <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText> */}
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Bio</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat fugiat est officiis, nisi eveniet eaque magni expedita laboriosam quo reiciendis dolor voluptatibus totam maxime esse aspernatur dicta tenetur natus recusandae similique sunt officia, modi nihil. Eligendi est fugit ullam! Nihil at molestiae sed sit, dolor esse omnis eligendi repudiandae vel. </MDBCardText>
                                        {/* <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Photographer</MDBCardText> */}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Sample Shots</MDBCardText>
                                    {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
                                </div>
                                <Container sx={{ paddingX: "20px", paddingY: "20px", borderRadius: "20px" }} >
                                    <ImageList sx={{ width: "100%" }} cols={3} gap={20} >
                                        {data?.images?.map((item, index) => (
                                            <ImageListItem key={index.toString()} sx={{ borderRadius: "20px" }}>
                                                <img
                                                    className='list-item'
                                                    src={item}
                                                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={"image"}
                                                    loading="lazy"
                                                    style={{ borderRadius: "20px", boxShadow: "10px 5px 5px #f2f2f2", }}
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Container>
                                <br />
                                <br />
                                {categoryImages?.map((data) => {
                                    return <><div className="d-flex justify-content-between align-items-center mb-4">
                                        <MDBCardText className="lead fw-normal mb-0">{data.name} images</MDBCardText>
                                        {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
                                    </div>
                                        <Container sx={{ paddingX: "20px", paddingY: "20px", borderRadius: "20px" }} >
                                            <ImageList sx={{ width: "100%" }} cols={3} gap={20} >
                                                {data?.images?.map((item, index) => (
                                                    <ImageListItem key={index.toString()} sx={{ borderRadius: "20px" }}>
                                                        <img
                                                            className='list-item'
                                                            src={item}
                                                            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={"image"}
                                                            loading="lazy"
                                                            style={{ borderRadius: "20px", boxShadow: "10px 5px 5px #f2f2f2", }}
                                                        />
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>
                                        </Container>
                                    </>
                                })}
                                {/* <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="g-2">
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default PhotographerProfile;