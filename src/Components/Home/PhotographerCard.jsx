import React from "react";
import "../CSS/ProfileCard.css";

import VerifiedIcon from '@mui/icons-material/Verified';

function PhotographerCard({ data }) {
  return (
    <div>
      <div class="container_card">

        <div class="grid-7 element-animation">
          <div class="card_card color-card">
          <div class="verfied_icon" style={{position:"absolute",top:"0",left:"0"}}>
           
          </div>
            <ul>
              <li>
                <i class="fas fa-arrow-left i-l w"></i>
              </li>
              <li>
                <i class="fas fa-ellipsis-v i-r w"></i>
              </li>
              <li>
                <i class="far fa-heart i-r w"></i>
              </li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7d5363c18112a02ce22d0c46f8570147&auto=format&fit=crop&w=635&q=80%20635w"
              alt="profile-pic"
              class="profile"
            />
          <h1 class="title">{data.name} <span> {data.isVerified && 
                <VerifiedIcon />
            }</span></h1>
           
           
            <p class="job-title-heading" > Available For </p>
            {data?.categories?.map((category) => {
              return <span class="job-title">{category} </span>
            })}

            <br />
            <br />

            <p class="job-title-heading"> Available At </p>
            {data.avl_Locations?.map((location) => {
              return <span class="job-title">{location} </span>
            })}
            {/* <p class="job-title"> SENIOR PRODUCT DESIGNER</p> */}
            <div class="desc top">
              <p>Create usable interface and designs @GraphicSpark</p>
            </div>
            <button class="btn_card color-a top"> Hire me</button>

            {/* <hr/> */}
            {/* <div class="container_card">
        <div class="content">
          <div class="grid-2">
            <button class="color-b circule"> <i class="fab fa-dribbble fa-2x"></i></button>
            <h2 class="title">12.3k</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-c circule"><i class="fab fa-behance fa-2x"></i></button>
            <h2 class="title">16k</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-d circule"><i class="fab fa-github-alt fa-2x"></i></button>
            <h2 class="title">17.8k</h2>
            <p class="followers">Followers</p>
          </div>
        </div>
      </div> */}
          </div>
        </div>

        {/* <div class="grid-7 element-animation">
    <div class="card_card color-card-2">
      <ul>
        <li><i class="fas fa-arrow-left i-l b"></i></li>
        <li><i class="fas fa-ellipsis-v i-r b"></i></li>
        <li><i class="far fa-heart i-r b"></i></li>
      </ul>
      <img src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7d5363c18112a02ce22d0c46f8570147&auto=format&fit=crop&w=635&q=80%20635w" alt="profile-pic" class="profile"/>
      <h1 class="title-2">Bevely Little</h1>
      <p class="job-title"> SENIOR PRODUCT DESIGNER</p>
      <div class="desc top">
        <p>Create usable interface and designs @GraphicSpark</p>
      </div>
      <button class="btn_card color-a top"> Hire me</button>

      <hr class="hr-2"/>
      <div class="container_card">
        <div class="content">
          <div class="grid-2">
            <button class="color-b circule"> <i class="fab fa-dribbble fa-2x"></i></button>
            <h2 class="title-2">12.3k</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-c circule"><i class="fab fa-behance fa-2x"></i></button>
            <h2 class="title-2">16k</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-d circule"><i class="fab fa-github-alt fa-2x"></i></button>
            <h2 class="title-2">17.8k</h2>
            <p class="followers">Followers</p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
      </div>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
      ></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
        rel="stylesheet"
      />
    </div>
  );
}

export default PhotographerCard;
