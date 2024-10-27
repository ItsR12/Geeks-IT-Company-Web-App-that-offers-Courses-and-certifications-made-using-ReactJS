import React from "react";
import "../styles/style.css";
import IndNavbarLoggedIn from "../components/ind-navbarloggedin";
import Footer from "../components/footer";
import b1 from "../images/b1.png";
import Sidebar from "../components/sidebar";

const UserDashboard = () => {
  return (
    <div className="bg-body-tertiary">
      {/* User Profile */}
      <div className="container-fluid">
        <div className="row">
          {/* sidebar */}
          <Sidebar />

          {/* profile area */}
          <div className="col-10" id="bg">
            <header className="bg-surface-secondary">
              <div
                className="bg-cover"
                style={{
                  height: 100,
                  backgroundImage: `url(${b1})`,
                  // backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
              <div className="container max-w-screen-xl">
                <div className="row g-0">
                  <div className="col-auto">
                    <a
                      href="#"
                      className="avatar w-40 h-40 border border-body border-4 rounded-circle shadow mt-n16"
                    >
                      <img
                        alt="..."
                        src={require("../images/AI - Person 1.jpg")}
                        width={200}
                        className="rounded-circle border-5 border border-white"
                      />
                    </a>
                  </div>
                  <div className="col ps-4 pt-4">
                    <h1 className="h2">Rajat Bara</h1>
                    <h6 className="text-xs text-uppercase text-muted mb-1 small">
                      <i class="bi bi-code me-1"></i>
                      Web Developer Intern
                    </h6>
                    <div className="d-flex flex-row gap-2 align-items-center lh-1">
                      {/*icon*/}
                      <span>
                        <i class="bi bi-geo-alt-fill text-danger"></i>
                      </span>
                      {/*text*/}
                      <span className="small fw-bold">New Delhi, India</span>
                    </div>
                    <div className="d-flex mt-2 gap-2 flex-wrap mt-3 d-none d-sm-block">
                      <a
                        href="#"
                        className="bg-white bg-opacity-50 bg-opacity-100-hover border rounded px-3 py-1 font-semibold text-heading text-xs small"
                        id="skills"
                      >
                        HTML
                      </a>{" "}
                      <a
                        href="#"
                        className="bg-white bg-opacity-50 bg-opacity-100-hover border rounded px-3 py-1 font-semibold text-heading text-xs small"
                        id="skills"
                      >
                        CSS
                      </a>{" "}
                      <a
                        href="#"
                        className="bg-white bg-opacity-50 bg-opacity-100-hover border rounded px-3 py-1 font-semibold text-heading text-xs small"
                        id="skills"
                      >
                        ReactJS
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-auto mt-2 mt-md-0 mb-md-3 hstack gap-2 mt-4 mt-sm-0">
                    <a
                      href="#"
                      className="btn btn-sm btn-square btn-neutral border"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                      </svg>{" "}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-square btn-neutral border"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bell-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                      </svg>{" "}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary d-block d-md-inline-block ms-auto ms-md-0"
                      id="purple-button"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
            </header>

            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid max-w-screen-xl container">
                <div className="row g-6">
                  <div className="col-xl-8">
                    <div className="vstack gap-6">
                      <div className="card mt-4 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-3 fw-bold">About</h6>
                          <p className="text-sm lh-relaxed mb-2">
                            Highly motivated IT professional with 1.5 years of
                            experience in computer hardware, networking, and web
                            development. Skilled in delivering efficient
                            solutions, troubleshooting complex issues, and
                            developing innovative web applications.
                          </p>
                          <input
                            class="btn btn-primary mt-2 me-1 btn btn-outline-secondary btn-sm"
                            type="submit"
                            value="Edit"
                            id="purple-button"
                          />
                        </div>
                      </div>

                      <div className="card mt-3 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-3 fw-bold">Experience</h6>

                          <div>
                            <div className="d-md-flex">
                              <div className="mb-3 mb-md-0 p-2">
                                {/* Img */}
                                <div className="job-circle border">
                                  <img
                                    src={require("../../src/images/Zidio Development logo square.jpg")}
                                    alt="twbs"
                                    width="32"
                                    height="32"
                                    class="flex-shrink-0"
                                  />
                                </div>
                              </div>
                              {/* text */}
                              <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                                <div className="d-flex justify-content-between mb-5">
                                  <div>
                                    {/* heading */}
                                    <h3 className="mb-1 fs-6">
                                      <a
                                        href="../jobs/job-single.html"
                                        className="text-inherit"
                                      >
                                        Web Developer Intern
                                      </a>
                                    </h3>
                                    <div>
                                      <span className="text-secondary small">
                                        at{" "}
                                        <span className="fw-semibold">
                                          Zidio Development
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="d-md-flex">
                              <div className="mb-3 mb-md-0 p-2">
                                {/* Img */}
                                <div className="job-circle border">
                                  <img
                                    src={require("../../src/images/Tata Steel logo.jpg")}
                                    alt="twbs"
                                    width="32"
                                    height="32"
                                    class="flex-shrink-0"
                                  />
                                </div>
                              </div>
                              {/* text */}
                              <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                                <div className="d-flex justify-content-between mb-5">
                                  <div>
                                    {/* heading */}
                                    <h3 className="mb-1 fs-6">
                                      <a
                                        href="../jobs/job-single.html"
                                        className="text-inherit"
                                      >
                                        Customer Service Engineer
                                      </a>
                                    </h3>
                                    <div>
                                      <span className="text-secondary small">
                                        at{" "}
                                        <span className="fw-semibold">
                                          Tata Steel
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="d-md-flex">
                              <div className="mb-3 mb-md-0 p-2">
                                {/* Img */}
                                <div className="job-circle border">
                                  <img
                                    src={require("../../src/images/Easypolicy.png")}
                                    alt="twbs"
                                    width="32"
                                    height="32"
                                    class="flex-shrink-0"
                                  />
                                </div>
                              </div>
                              {/* text */}
                              <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                                <div className="d-flex justify-content-between mb-5">
                                  <div>
                                    {/* heading */}
                                    <h3 className="mb-1 fs-6">
                                      <a
                                        href="../jobs/job-single.html"
                                        className="text-inherit"
                                      >
                                        System Engineer - IT Networking
                                      </a>
                                    </h3>
                                    <div>
                                      <span className="text-secondary small">
                                        at{" "}
                                        <span className="fw-semibold">
                                          Easypolicy Insurance Web Aggregators
                                          Pvt. Ltd.
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <input
                              class="btn btn-primary mt-2 me-1 btn btn-outline-secondary btn-sm"
                              type="submit"
                              value="+ Add Experience"
                              id="purple-button"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="vstack gap-6">
                      <div className="card mt-4 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-4 fw-bold">Location</h6>
                          <div
                            className="d-flex align-items-center"
                            id="grey-text"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-geo-alt-fill me-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>{" "}
                            <a
                              href="#"
                              className="text-sm text-heading text-dark text-dark"
                              id="grey-text"
                            >
                              New Delhi, India
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card mt-3 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-4 fw-bold">Email</h6>
                          <div
                            className="d-flex align-items-center"
                            id="grey-text"
                          >
                            <i class="bi bi-envelope-fill me-2"></i>
                            <a
                              href="#"
                              className="text-sm text-heading text-dark text-dark"
                              id="grey-text"
                            >
                              rajat@jobzy.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card mt-3 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-4 fw-bold">Phone</h6>
                          <div
                            className="d-flex align-items-center"
                            id="grey-text"
                          >
                            <i class="bi bi-telephone-fill me-2"></i>
                            <a
                              href="#"
                              className="text-sm text-heading text-dark text-dark"
                              id="grey-text"
                            >
                              9548625756
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card mt-3 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-4 fw-bold">Birthday</h6>
                          <div
                            className="d-flex align-items-center"
                            id="grey-text"
                          >
                            <i class="bi bi-cake2-fill me-2"></i>
                            <a
                              href="#"
                              className="text-sm text-heading text-dark text-dark"
                              id="grey-text"
                            >
                              29 June 1995
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card mt-3 mb-4 border-light-subtle">
                        <div className="card-body">
                          <h6 className="mb-4 fw-bold">Socials</h6>
                          <div className="vstack gap-4">
                            <div className="d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-github me-2"
                                viewBox="0 0 16 16"
                                id="grey-text"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                              </svg>{" "}
                              <a
                                href="#"
                                className="text-sm text-heading text-dark"
                                id="grey-text"
                              >
                                GitHub
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-facebook me-2"
                                viewBox="0 0 16 16"
                                id="grey-text"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                              </svg>{" "}
                              <a
                                href="#"
                                className="text-sm text-heading text-dark "
                                id="grey-text"
                              >
                                Facebook
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-twitter-x me-2"
                                viewBox="0 0 16 16"
                                id="grey-text"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                              </svg>{" "}
                              <a
                                href="#"
                                className="text-sm text-heading text-dark "
                                id="grey-text"
                              >
                                Twitter
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-instagram me-2"
                                viewBox="0 0 16 16"
                                id="grey-text"
                              >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                              </svg>{" "}
                              <a
                                href="#"
                                className="text-sm text-heading text-dark "
                                id="grey-text"
                              >
                                Instagram
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-youtube me-2"
                                viewBox="0 0 16 16"
                                id="grey-text"
                              >
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                              </svg>{" "}
                              <a
                                href="#"
                                className="text-sm text-heading text-dark "
                                id="grey-text"
                              >
                                Youtube
                              </a>
                            </div>
                          </div>
                          <input
                            class="btn btn-primary mt-3 me-1 btn btn-outline-secondary btn-sm"
                            type="submit"
                            value="+ Add Social"
                            id="purple-button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserDashboard;
