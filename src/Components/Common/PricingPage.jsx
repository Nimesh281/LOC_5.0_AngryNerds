import React from "react";
import PricingCard from "./PricingCard";
import "../CSS/Pricing.css";
import DoneOutlineSharpIcon from "@mui/icons-material/DoneOutlineSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import Navbar from "./Navbar";

const cardsData = [
  {
    id: 1,
    type: "free",
    title: "Free Plan",
    description: "Lorem ipsum",
    price: 19.99,
    recurrency: 14.99,
    mostPopular: false,
    data: ["2TB Storage", "100 E-mails"],
  },
  {
    id: 2,
    type: "basic",
    title: "Basic Plan",
    description: "Lorem ipsum",
    price: 29.99,
    recurrency: 24.99,
    mostPopular: false,
    data: ["2TB Storage", "200 E-mails", "10 Accounts"],
  },
  {
    id: 3,
    type: "medium",
    title: "Medium Plan",
    description: "Lorem ipsum",
    price: 69.99,
    recurrency: 59.99,
    mostPopular: true,
    data: ["10TB Storage", "500 E-mails", "20 Accounts", "24/7 Support"],
  },
  {
    id: 4,
    type: "pro",
    title: "Pro Plan",
    description: "Lorem ipsum",
    price: 99.99,
    recurrency: 84.99,
    mostPopular: false,
    data: [
      "50TB Storage",
      "Unlimited E-mails",
      "Unlimited Accounts",
      "24/7 Support",
    ],
  },
];

function PricingPage() {
  return (
    <div>
        <Navbar/>
      <section class="pricing-section">
        <div class="container">
          <div class="sec-title text-center">
            <span class="title">Get plan</span>
            <h2>Choose a Plan</h2>
          </div>

          <div class="outer-box">
            <div class="row">
              <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-outer">
                      <SendSharpIcon
                        sx={{ width: "100%", height: "100%" ,color:"#40CBB4"}}
                        color="#40CBB4"
                      />
                    </div>
                  </div>
                  <div class="price-box">
                    <div class="title"> 😌 Free 😌</div>
                    <h4 class="price">₹0/month </h4>
                  </div>
                  <ul class="features">
                    <li class="true"> 30 Downloads/day</li>
                    <li class="true">Get Access to basic Images</li>
                    <li class="false">AD Free</li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                  </ul>
                  <div class="btn-box">
                    <a href="https://codepen.io/anupkumar92" class="theme-btn">
                      BUY plan
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-outer">
                    <DiamondSharpIcon
                        sx={{ width: "100%", height: "100%" ,color:"#1D95D2"}}
                        color="#1D95D2"
                      />
                    </div>
                  </div>
                  <div class="price-box">
                    <div class="title">AD Free</div>
                    <h4 class="price">₹150/month</h4>
                  </div>
                  <ul class="features">
                    <li class="true">150 Downloads/day</li>
                    <li class="true">ADFree Experience</li>
                    <li class="true">Moderate Download speed</li>
                    <li class="true">Easy Access</li>
                    <li class="false">Free Contacts</li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                    <li class="false"></li>
                  </ul>
                  <div class="btn-box">
                    <a href="https://codepen.io/anupkumar92" class="theme-btn">
                      BUY plan
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div class="inner-box">
                  <div class="icon-box">
                    <div class="icon-outer">
                    <RocketLaunchSharpIcon
                        sx={{ width: "100%", height: "100%" ,color:"#FFC20B"}}
                        color="#FFC20B"
                      />
                    </div>
                  </div>
                  <div class="price-box">
                    <div class="title">Premium Access</div>
                    <h4 class="price">₹500/month</h4>
                  </div>
                  <ul class="features">
                    <li class="true">Unlimited Downlaods/day</li>
                    <li class="true">Free Lunch And Coffee</li>
                    <li class="true">High Download speed</li>
                    <li class="true">Priority for appointments</li>
                    <li class="true">AD Free</li>
                  </ul>
                  <div class="btn-box">
                    <a href="https://codepen.io/anupkumar92" class="theme-btn">
                      BUY plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
