import React from "react";
import "../styles/style.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import b1 from "../images/b1.png";
import Marquee from "react-fast-marquee";
import IndNavbar from "../components/ind-navbar";
import Footer from "../components/footer";
import { useEffect, useRef } from "react";

const IndexPage = () => {
  const counters = useRef([]);

  useEffect(() => {
    const countTo = (element, options) => {
      const settings = { ...countTo.defaults, ...options };
      settings.from = element.dataset.from || settings.from;
      settings.to = element.dataset.to || settings.to;
      settings.speed = element.dataset.speed || settings.speed;
      settings.refreshInterval =
        element.dataset.refreshInterval || settings.refreshInterval;
      settings.decimals = element.dataset.decimals || settings.decimals;

      let loops = Math.ceil(settings.speed / settings.refreshInterval);
      let increment = (settings.to - settings.from) / loops;
      let loopCount = 0;
      let value = settings.from;

      const intervalId = setInterval(updateTimer, settings.refreshInterval);
      element.dataset.countToInterval = intervalId;

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(element, value);
        }

        if (loopCount >= loops) {
          clearInterval(intervalId);
          delete element.dataset.countToInterval;
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(element, value);
          }
        }
      }

      function render(value) {
        const formattedValue = settings.formatter(value, settings);
        element.innerHTML = formattedValue;
      }
    };

    countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
      formatter: (value, settings) => value.toFixed(settings.decimals),
      onUpdate: null,
      onComplete: null,
    };

    const counterElements = document.querySelectorAll(".count-number");

    counterElements.forEach((element) => {
      const options = {
        formatter: (value, options) =>
          value
            .toFixed(options.decimals)
            .replace(/\B(?=(?:\d{3})+(?!\d))/g, ","),
      };

      countTo(element, options);
    });
  }, []);
  return (
    <>
      {/* Navbar */}
      <IndNavbar />

      {/* Hero */}
      <section className="position-relative my-5">
        <div className="container position-relative">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 position-relative">
              {/* Pre title */}
              <div className="d-flex align-items-center mb-4">
                <div className="icon-md bg-body rounded-circle shadow-sm fs-5 text-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-lightbulb mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                  </svg>
                </div>
                <span className="h6 ms-3 mb-0">Grow Your Future With Us</span>
              </div>
              {/* Title */}
              <h1 className="mb-4 display-5 fw-bold">
                Innovative IT Solutions for Business
                <span className="position-relative z-index-9">
                  <span className="ms-5">Success</span>
                  {/* SVG START */}
                  <span className="position-absolute top-50 start-50 translate-middle z-index-1 mt-n2 d-none d-sm-block">
                    <svg
                      className="fill-warning ms-5"
                      fill="#ffc107"
                      width="320px"
                      height="84.1px"
                      viewBox="0 0 357 84.1"
                      style={{ enableBackground: "new 0 0 357 84.1" }}
                      xmlSpace="preserve"
                    >
                      <path d="M27,74.9c0.9,0,0.9,0.2,1,0.5c0.3,1,0.1,1.9-0.2,2.8c-0.3,1.3-0.3,2.6-0.3,3.8c0,0.6,0.9,0.8,1.7,1 c0.8,0.2,1.1-0.2,1.7-0.4c0.1,0.4,0.2,0.7,0.4,1c0.2,0.3,0.6,0.4,1.1,0.1c0.5-0.3,1.2-0.6,1.2-0.9c0.2-0.7,1-1.4,1.6-2 c0.4-0.5,0.6-1.1,1.6-1.4c0.5-0.2,0.3-0.5,0.2-0.7c-0.2-1.1-0.1-2.3,0-3.4c0.1-0.5,0.6-0.6,1.7-0.7c9.4-0.2,18.9,0,28.3-0.1 c11.5,0,23-0.2,34.5-0.2c8.4,0,16.7,0.5,25,0.8c16.6,0.6,33.2,1.3,50,1.3c11.4,0,22.8-0.2,34.2,0c8.9,0.2,17.7,0.5,26.6,0.5 c12.6,0,25.2-0.2,37.8-0.8c13.2-0.6,26.5-0.5,39.8-0.5c2.6,0,5.2,0,7.8,0c0.9,0,1.3,0.2,1.9,0.4c1.9,0.7,1.7,1.6,1.9,2.4 c0.4,1.5,0.9,3,0.2,4.6c-0.3,0.7,1.2,0.6,1.7,0.9c0.4,0.2,1-0.1,1.4-0.2c0.6-0.2,1-0.5,1.3-0.8c2.4-2.2,3.8-4.4,3.4-6.8 c-0.1-0.6,0.2-0.8,1.6-0.7c1.2,0.1,2.4,0,3.5,0c2.4,0,2.8-0.2,3.5-1.2c0.2-0.3,0.5-0.6,0.8-0.9c-1.1-0.4,0.1-0.6,0.2-0.9 c0.1-0.4,0.3-0.7,1.2-0.9c-2-0.8-3.8-1.8-6.9-1.5c-1,0.1-2,0.1-2.9,0.1c-1.2,0-1.6-0.2-1.6-0.7c0-2.6-0.1-5.2,0.4-7.8 c0.2-1.1,0.2-2.1,0.2-3.2c0.1-2.5,0.7-4.9,1.1-7.4c0.5-3,2.1-6,3.4-9c0.4-1-0.3-1.9-0.2-2.8c0-0.3-0.2-0.6-0.1-0.9 c0.1-2.8-0.7-5.5-1-8.3c-0.1-0.9-0.5-1.9-0.1-2.8c0.8-1.9,0.8-3.4,0.5-3.5c-0.3-0.1-1.4,1.8-1.7,1.7c-0.2-0.1-0.2-1,0.5-1.4 c0.5-0.3,1.1-0.1,1.2-0.3c0.2-0.3-1.8-0.9-2.8-2.2c-0.9-1.2-1-3.2,0-3.8c0.8-0.5,1.8,0.3,5.2,0.4c0.7,0,1.4,0.1,2.3,0 c3.2-0.2,5.2-1.2,6.7-2.4c0.2-0.2,0.4-0.4,0.6-0.6c0-0.1,0-0.3,0-0.4c-0.8-0.1-1.3-0.5-2.2-0.5c-0.3,0-0.4-0.2-0.3-0.3 c0.5-0.6-0.6-0.7-1.3-0.9c-0.7-0.2-1.4-0.1-2.1,0.2c-1.3,0.6-3.1,0.4-4.7,0.4c-0.6,0-0.5-0.3-0.5-0.5c-0.4-1-0.4-2-0.2-3 c0.1-0.7-0.6-1-1.7-1.1c-0.9-0.1-1.1-0.3-1.4-0.6c-0.7-0.5-2.4-0.9-3.6-0.8c-0.6,0.1-1,0.3-1,0.6c0.2,1.1-0.5,2.1-1.7,2.9 c-1.1,0.7-1.5,1.5-1.6,2.3c-0.1,0.4-1,0.3-1.1,0.3c-1.5-0.1-5.1,1.5-14.9,2c-25.2,1.3-40,0.7-40,0.7c-42.2-1.7-52.1,2.8-77.3,0.5 c-3.4-0.3-14.2-1.4-28.9-0.9c-4.5,0.1-7.5,0.4-10,0.5c-15.1,1-27.6,0.8-50.9,0.4c-20.7-0.4-15.4-0.7-37.1-1.3 c-11.5-0.3-22.8-4.2-34.3-3.5c-0.2,0-1.1,0.1-1.4-0.3c-0.1-0.1-0.1-0.2-0.1-0.3c0-1.1-0.8-2.1,0-3.2C32,8,30.9,8,30.4,7.9 c-0.5-0.1-0.9-0.2-1.1-0.5c-0.5-0.6-1.8-0.5-2.8-0.5c-0.6,0-0.9,0.3-1,0.6c-0.1,0.6-0.3,1.3-1,1.9c-1,0.8-1.6,1.6-1.9,2.4 c-0.1,0.3-0.5,0.3-1,0.2c-1.3-0.1-2.6-0.1-4-0.1c-1.8-0.1-1.8,0-1.9,0.8c0,0.7-1,1.3-1.6,1.9c0,0.5-0.8,0.9-1.2,1.3 c-0.3,0.5,0.2,0.9,1.1,1.1c2.2,0.5,3.9,1.4,6.5,1.5c0.6,0,0.9,0.2,0.9,0.4c0,0.2,0,0.4-0.7,0.5c-0.3,0-0.7,0.1-1,0.1 c-0.7,0.1-1.3,0.3-1.3,0.7c0,0.4,0.9,0.4,1.4,0.5c1.2,0.1,1.4,0.3,1.4,0.8c-0.3,7.2,1.2,14.4,2.4,21.5c0.7,4.1,0.9,8.3,1.6,12.5 c0.8,4.4,0.5,8.8,1.4,13.2c0.2,0.9,0.4,1.8,0.7,2.6c0.1,0.4,0,0.5-1,0.6c-5.5,0.5-11,0.8-16.7,0.9c-0.7,0-1.1,0.1-1.2,0.4 c-0.1,0.2-0.3,0.4-0.6,0.6c0,0.1,0,0.2,0,0.3c2.2,0.5,4.7,0.4,7,0.5C19,74.7,23,74.9,27,74.9z M31,28.4c0.5-2.5,0.6-5.1,0.5-7.6 c0-0.5,0.4-0.6,1.4-0.6c4.8,0.1,9.7,0.2,14.5,0.4c0.2,0,0.5,0,0.7,0c5.4,0.1,10.8,0,16.2,0.2c4.4,0.1,8.7,0,13.1,0.1 c7.6,0.2,15.3,0.3,22.9,0.4c5.3,0.1,10.6,0.2,15.9,0.3c5.3,0.1,10.6,0.2,15.9,0.3c15,0.3,30.1,0,45.1,0.1 c5.6,0.1,11.3,0.2,16.9,0.3c8,0.2,16,0.2,24.1,0.2c7.9,0,15.8,0,23.7,0c3,0,6-0.2,8.9-0.3c0.3,0,0.6,0,0.8,0.1 c5.1,0,10.2-0.3,15.3-0.6c9.8-0.5,19.6-0.7,29.4-1.2c9.3-0.4,18.6-0.9,27.9-1.3c3.7-0.2,3.7-0.2,3.8,1.5c0.3,3.6-0.3,7.1-1.3,10.6 c-1.2,4-1.4,8-1.6,12.1c-0.3,7.2-0.2,14.4-0.8,21.6c-0.1,1.7-0.6,3.4-0.5,5c0,0.6-0.7,0.5-1.5,0.5c-8,0-15.9,0-23.9,0 c-9.9-0.1-19.9,0.1-29.7,0.7c-11.7,0.7-23.2,0.3-34.8-0.2c-19.1-0.8-38.3-1.6-57.5-1.7c-27-0.1-54-0.1-81,0.3 c-13.7,0.2-27.4,0.2-41.1,0c-0.3,0-0.6,0-0.9,0l0,0l0,0c-2.4,0-4.8,0-7.2,0c-0.7,0-1.4,0-2,0.1c-0.3,0.1-0.9,0-0.8,0.3 C43.2,70,43.6,70,44,70c2.8,0.3,5.7,0.4,8.5,0.5c3.1,0.1,6.3,0.3,9.6,0.3c-0.4,0.4-0.9,0.4-1.5,0.4c-6.4,0.1-12.7,0.3-19.1,0.3 c-0.7,0-1.4,0.1-2,0.1c-0.7,0-1.4,0.2-2-0.1l-0.1,0c0,0,0,0,0,0c-0.7,0.1-1.2,0-1.3-0.4c-0.1-0.5-0.7-1,0.4-1.5 c0.2-0.1,0.3-0.2,0.1-0.3c-1.3-0.5-0.4-1.2-0.7-1.7c-0.4-0.6-0.3-1.3-0.4-1.9c-0.1-1.9-0.1-3.7-0.4-5.6c-0.3-2.6-0.8-5.1-1.1-7.7 c-0.3-2.5-0.6-5-1.2-7.4c-0.6-2.3-0.7-4.6-1.3-6.9c-0.6-2.3-0.8-4.7-1.1-7C30.6,30.2,30.8,29.3,31,28.4z" />
                    </svg>
                  </span>
                  {/* SVG END */}
                </span>
              </h1>
              <p className="mb-4" id="grey-text">
                Transform your business with our cutting-edge technology
                solutions and expert services.
              </p>
              {/* Button */}
              <div className="d-lg-flex mb-4">
                <a
                  href="#"
                  className="btn btn-primary me-4 fw-medium"
                  id="purple-button"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right mb-1 ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
                <a href="#" className="btn btn-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>{" "}
                  <span className="ms-1 me-2 fw-medium">See it in action</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              </div>
              {/* Review */}
              <div className="d-sm-flex align-items-center position-relative">
                <ul className="avatar-group mb-2 mb-sm-0 position-relative">
                  <div className="avatar avatar-sm">
                    <img
                      className="avatar-img rounded-circle"
                      src={require("../images/Person 1.jpg")}
                      alt="avatar"
                      width={50}
                    />
                  </div>
                  <div className="avatar avatar-sm">
                    <img
                      className="avatar-img rounded-circle "
                      src={require("../images/Person 2.jpg")}
                      alt="avatar"
                      width={50}
                    />
                  </div>
                  <div className="avatar avatar-sm">
                    <img
                      className="avatar-img rounded-circle"
                      src={require("../images/Person 3.jpg")}
                      alt="avatar"
                      width={50}
                    />
                  </div>
                  <div className="avatar avatar-sm">
                    <img
                      className="avatar-img rounded-circle"
                      src={require("../images/Person 4.jpg")}
                      alt="avatar"
                      width={50}
                    />
                  </div>
                </ul>
                {/* Content */}
                <p className="mb-0 h6 ms-0 ms-sm-3 fw-bold">
                  Trusted by over 10K Clients Worldwide Since 2020
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="col-md-6">
              <img src={require("../images/Education - Study 1.png")} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <div className="container-fluid my-5">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex justify-content-center text-center mb-6">
              <h6 className="fw-bold">Learn from Top Industry Experts</h6>
            </div>
          </div>
        </div>
        <div className="row mt-5 mt-sm-2">
          <Marquee speed={100} loop={0} className="my-5">
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Accenture.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Adobe.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Amazon.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Cisco.png")} alt="" />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Cognizant.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Dell.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Facebook.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Google.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - HP.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - IBM.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Infosys.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Intel.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Meta.png")} alt="" />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Microsoft.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - NVIDIA.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Oracle.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - SAP.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Sony.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - TCS.png")} alt="" />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Tech Mahindra.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Wipro.png")}
                alt=""
                style={{ width: "3%" }}
              />
            </div>
          </Marquee>
        </div>
      </div>

      {/* Feature */}
      <section class="pb-lg-14 pb-6 my-5 p-5 bg-body-secondary">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 offset-xl-3 col-md-12 col-12">
              <div class="text-center mb-lg-10 mb-4">
                <h6 class="h2 fw-bold">
                  Building strong{" "}
                  <u class="text-warning">
                    <span style={{ color: "#754ffe" }}>
                      foundational skills
                    </span>
                  </u>
                </h6>
                <p class="fw-light" id="grey-text">
                  Online courses certification section design for showcase your
                  certificate program features.
                </p>
              </div>
            </div>
          </div>
          <div class=" row align-items-center ">
            <div class="col-xl-5 col-lg-6 col-md-12 col-12">
              <div class="mb-6 mb-lg-0">
                <div class="mb-2">
                  <img
                    src={require("../images/Geeks Certificate.jpg")}
                    alt="certificate"
                    class="img-fluid w-100"
                  />
                </div>
                <div class="d-flex mb-sm-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#754ffe"
                      class="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                    </svg>
                  </span>
                  <small class="ms-2" id="grey-text">
                    Completion certificate awarded on every monthly target,
                    experience, intership and course completion.
                  </small>
                </div>
              </div>
            </div>
            <div class="col-xl-6 offset-xl-1  col-lg-6 col-md-12 col-12 ">
              <div class="row row-cols-2">
                <div class="col">
                  <div class="mb-4 mb-xl-6">
                    <div class="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#754ffe"
                        class="bi bi-trophy"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold">Learn from Industry Experts</h6>
                      <small id="grey-text">
                        Get expert guidance from experienced professionals in
                        the field.
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-lg-6 mb-4">
                    <div class="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#754ffe"
                        class="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold">Free Resources</h6>
                      <small id="grey-text">
                        Get instant access to valuable resources, absolutely
                        free.
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-4 mb-md-0">
                    <div class="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#754ffe"
                        class="bi bi-shield-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"></path>
                        <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"></path>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold">Learn Anytime, Anywhere</h6>
                      <small id="grey-text">
                        Take your learning with you, wherever you go.
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <div class="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#754ffe"
                        class="bi bi-nut"
                        viewBox="0 0 16 16"
                      >
                        <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z"></path>
                        <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h6 className="fw-bold">Skill-based Learning</h6>
                      <small id="grey-text">
                        Learn skills that matter - practical knowledge for
                        real-world success.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container my-5">
        <div
          className="swiper-wrapper mb-5 my-5"
          id="swiper-wrapper-d4e10bf766ff748110"
          aria-live="polite"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          {/* Item */}
          <div
            className="swiper-slide h-auto py-3 swiper-slide-active"
            role="group"
            aria-label="1 / 4"
            style={{ width: 322, marginRight: 8 }}
          >
            <div className="card border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
              <div className="card-body">
                {/* <img
                  src="assets/img/landing/app-showcase-3/features/payment.svg"
                  style={{
                    filter:
                      "drop-shadow(0px 0.8645132780075073px 4.602016925811768px rgba(99, 102, 241, 0.02)) drop-shadow(0px 2.9037201404571533px 10.33138370513916px rgba(99, 102, 241, 0.05)) drop-shadow(0px 13px 27px rgba(99, 102, 241, 0.17))",
                  }}
                  alt="Payment icon"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#29baf9"
                  class="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
                <h3
                  className="h1 pt-4 mb-1 fw-bold timer count-title count-number fw-bold"
                  data-to={50}
                  data-speed={3000}
                />
                <p className="fs-lg mb-0 fw-light" id="grey-text">
                  Year Expertise
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            className="swiper-slide h-auto py-3 swiper-slide-next"
            role="group"
            aria-label="2 / 4"
            style={{ width: 322, marginRight: 8 }}
          >
            <div className="card border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
              <div className="card-body">
                {/* <img
                  src="assets/img/landing/app-showcase-3/features/users.svg"
                  style={{
                    filter:
                      "drop-shadow(0px 0.8645132780075073px 4.602016925811768px rgba(8, 14, 138, 0.02)) drop-shadow(0px 2.9037201404571533px 10.33138370513916px rgba(8, 14, 138, 0.04)) drop-shadow(0px 15px 30px rgba(8, 14, 138, 0.10))",
                  }}
                  alt="Users icon"
                /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#19cb98"
                  class="bi bi-file-earmark-bar-graph-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
                </svg>
                <h3
                  className="h1 pt-4 mb-1 fw-bold timer count-title count-number fw-bold"
                  data-to={500}
                  data-speed={3000}
                >
                  500 <span className="h4 fw-bold">Projects</span>
                </h3>
                <p className="fs-lg mb-0 fw-light" id="grey-text">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            className="swiper-slide h-auto py-3"
            role="group"
            aria-label="3 / 4"
            style={{ width: 322, marginRight: 8 }}
          >
            <div className="card border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
              <div className="card-body">
                {/* <img
                  src="assets/img/landing/app-showcase-3/features/statistics.svg"
                  style={{
                    filter:
                      "drop-shadow(0px 0.8645132780075073px 4.602016925811768px rgba(99, 102, 241, 0.02)) drop-shadow(0px 2.9037201404571533px 10.33138370513916px rgba(99, 102, 241, 0.05)) drop-shadow(0px 13px 27px rgba(99, 102, 241, 0.17))",
                  }}
                  alt="Statistics icon"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#e53f3c"
                  class="bi bi-wrench-adjustable"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" />
                  <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
                <h3 className="h1 pt-4 mb-1 fw-bold">
                  24*7 <span className="h4 fw-bold">Service</span>
                </h3>
                <p className="fs-lg mb-0 fw-light" id="grey-text">
                  Technical and Non-Technical
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            className="swiper-slide h-auto py-3"
            role="group"
            aria-label="4 / 4"
            style={{ width: 322, marginRight: 8 }}
          >
            <div className="card border-0 shadow h-100 text-center text-sm-start p-3 mx-2">
              <div className="card-body">
                {/* <img
                  src="assets/img/landing/app-showcase-3/features/cashback.svg"
                  style={{
                    filter:
                      "drop-shadow(0px 0.8645132780075073px 4.602016925811768px rgba(8, 14, 138, 0.02)) drop-shadow(0px 2.9037201404571533px 10.33138370513916px rgba(8, 14, 138, 0.04)) drop-shadow(0px 14px 28px rgba(8, 14, 138, 0.10))",
                  }}
                  alt="Cashback icon"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#ffaa46"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                <h3
                  className="h1 pt-4 mb-1 fw-bold timer count-title count-number fw-bold"
                  data-to={100000}
                  data-speed={3000}
                >
                  <span className="h4 fw-bold">Clients</span>
                </h3>
                <p className="fs-lg mb-0 fw-light" id="grey-text">
                  Clients Globally Satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Testimonials*/}
      <section className="py-xl-8 py-6 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column gap-4 text-center mb-xl-7 mb-5">
                <div className="d-flex flex-column gap-2">
                  <h3 className="h3 mb-0 mt-5">
                    The reviews speak for themselves
                  </h3>
                  <p className="mb-0 fw-light" id="grey-text">
                    From critical skills to technical topics, Geeks supports
                    your professional development.
                  </p>
                </div>
                <div className="lh-1 d-flex flex-row gap-3 align-items-center justify-content-center">
                  <span>4.5/5</span>
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill text-warning"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </span>
                  <span id="purple-text">8,500+ reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="card shadow-lg">
                <div className="card-body p-5 d-flex flex-column gap-3">
                  <div className="lh-1">
                    <span className="align-text-top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-half text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                      </svg>
                    </span>
                    <span className="ms-2">4.5/5</span>
                  </div>
                  <div className="d-flex flex-column gap-6">
                    <div className="d-flex flex-column gap-2">
                      <span className="h6 mb-0">
                        Transformative Learning Experience!
                      </span>
                      <p className="mb-0" id="grey-text">
                        "I was struggling to grasp the concepts in my subject
                        until I enrolled in this course. The interactive lessons
                        and the support from the instructors were incredible. I
                        feel more confident and prepared for my exams now.
                        Highly recommend it to anyone looking to excel!"
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row gap-3 align-items-center mt-3">
                        <div>
                          <img
                            src={require("../images/Person 1.jpg")}
                            alt="avatar"
                            width={50}
                            className="rounded-circle icon-shape icon-xl"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span>Jitu Chauhan</span>
                          <span className="text-secondary">
                            Technical Co-Founder, CTO at Block
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 align-items-center">
                        <a href="#!" id="purple-text">
                          <span id="purple-text">
                            View this Bootstrap 5 course
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="card shadow-lg">
                <div className="card-body p-5 d-flex flex-column gap-3">
                  <div className="lh-1">
                    <span className="align-text-top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                    <span className="ms-2">5.0/5</span>
                  </div>
                  <div className="d-flex flex-column gap-6">
                    <div className="d-flex flex-column gap-2">
                      <span className="h6 mb-0">
                        Top-Notch Content and Teaching!
                      </span>
                      <p className="mb-0" id="grey-text">
                        "This course exceeded my expectations. The material is
                        presented in a clear and engaging way, making even the
                        most complex topics easy to understand. The quizzes and
                        assignments helped reinforce my learning. I can’t thank
                        the team enough for this fantastic resource."
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row gap-3 align-items-center mt-4">
                        <div>
                          <img
                            src={require("../images/Person 2.jpg")}
                            alt="avatar"
                            width={50}
                            className="rounded-circle icon-shape icon-xl"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span>Vallabh Sompura</span>
                          <span className="text-secondary">
                            College Freshman
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 align-items-center">
                        <a href="#!" id="purple-text">
                          <span>View this Figma UI / UX course</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="card shadow-lg">
                <div className="card-body p-5 d-flex flex-column gap-3">
                  <div className="lh-1">
                    <span className="align-text-top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                    <span className="ms-2">5.0/5</span>
                  </div>
                  <div className="d-flex flex-column gap-6">
                    <div className="d-flex flex-column gap-2">
                      <span className="h6 mb-0">
                        Perfect for Career Advancement!
                      </span>
                      <p className="mb-0" id="grey-text">
                        "As a working professional, I needed a course that fit
                        into my busy schedule. This course was perfect! The
                        flexible pacing allowed me to learn at my own speed, and
                        the practical applications taught in the course have
                        already helped me in my job. I’m looking forward to
                        taking more courses from this platform."
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row gap-3 align-items-center mt-3">
                        <div>
                          <img
                            src={require("../images/Person 3.jpg")}
                            alt="avatar"
                            width={50}
                            className="rounded-circle icon-shape icon-xl"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span>Anita Parmar</span>
                          <span className="text-secondary">
                            Marketing Specialist
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 align-items-center">
                        <a href="#!" id="purple-text">
                          <span>Read full Story</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default IndexPage;
