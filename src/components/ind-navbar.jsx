import React from "react";
import IndexPage from "../pages";
import CertiVerify from "../pages/certificate-verify";

const IndNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white shadow-sm p-2 mb-4 rounded">
      <div class="container px-0">
        <a class="navbar-brand" href="/">
          <img src={require("../images/Geeks.png")} alt="" width={100} />
        </a>
        <div class="d-flex align-items-center order-lg-3">
          <div class="d-flex align-items-center">
            <div class="dropdown me-2"></div>
            <div class="d-none d-md-block me-1">
              {/* Modal button */}
              <button
                type="button"
                class="btn mt-1 btn-white mb-1 btn btn-sm btn-light mb-0 bg-white border me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                <i className="bi bi-person-circle me-1" />
                Sign In
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5 fw-bold"
                        id="exampleModalLabel"
                      >
                        Sign In as
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="container">
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">
                            Candidate
                          </label>
                          <li className="nav-item me-2">
                            <a
                              href="/login"
                              target="_blank"
                              className="btn btn-sm btn-light mb-0 bg-light border"
                            >
                              <i className="bi bi-person-circle me-1 mb-1" />
                              Sign in as Candidate
                            </a>
                          </li>
                        </div>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">
                            Employer
                          </label>
                          <li className="nav-item me-2">
                            <a
                              href="/login"
                              target="_blank"
                              className="btn btn-sm btn-light mb-0 bg-light border"
                            >
                              <i className="bi bi-person-circle me-1 mb-1" />
                              Sign in as Employer
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary btn mt-1 btn-white mb-1 btn btn-sm btn-light mb-0 me-2"
                        id="purple-button"
                        data-bs-dismiss="modal"
                      >
                        <i class="bi bi-x me-1"></i>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn mt-1 btn-white mb-1 btn btn-sm btn-light mb-0 me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                data-bs-whatever="@mdo"
                id="purple-button"
              >
                <i className="bi bi-person-circle me-1" />
                Sign Up
              </button>
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5 fw-bold"
                        id="exampleModalLabel"
                      >
                        Sign Up as
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="container">
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">
                            Candidate
                          </label>
                          <li className="nav-item me-2">
                            <a
                              href="/signup"
                              target="_blank"
                              className="btn btn-sm btn-light mb-0 bg-light border"
                            >
                              <i className="bi bi-person-circle me-1 mb-1" />
                              Sign up as Candidate
                            </a>
                          </li>
                        </div>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">
                            Employer
                          </label>
                          <li className="nav-item me-2">
                            <a
                              href="/signup"
                              target="_blank"
                              className="btn btn-sm btn-light mb-0 bg-light border"
                            >
                              <i className="bi bi-person-circle me-1 mb-1" />
                              Sign up as Employer
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary btn mt-1 btn-white mb-1 btn btn-sm btn-light mb-0 me-2"
                        id="purple-button"
                        data-bs-dismiss="modal"
                      >
                        <i class="bi bi-x me-1"></i>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-default"
              aria-controls="navbar-default"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="icon-bar top-bar mt-0"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbar-default">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href=""
                id="navbarLanding"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarLanding"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarLanding">
                <li>
                  <a
                    href="/certificate-verify"
                    class="dropdown-item"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-file-earmark-check mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <span>Certificate Verification</span>
                    <span class="badge ms-2 fw-light">New</span>
                  </a>
                </li>
                <li>
                  <a
                    href="../pages/landings/landing-courses.html"
                    class="dropdown-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-journal-code mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
                      />
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                    </svg>
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="../pages/landings/landing-education.html"
                    class="dropdown-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-mortarboard mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                    </svg>
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="../pages/landings/landing-job.html"
                    class="dropdown-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-card-list mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                    </svg>
                    Job Listing
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarLanding"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul
                class="dropdown-menu dropdown-menu-arrow"
                aria-labelledby="navbarAccount"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    Email
                  </a>
                  <ul class="dropdown-menu">
                    <li class="text-wrap">
                      <h5 class="dropdown-header text-dark">Instructor</h5>
                      <p class="dropdown-text mb-0">
                        Instructor dashboard for manage courses and earning.
                      </p>
                    </li>
                    <li>
                      <hr class="mx-3" />
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/dashboard-instructor.html"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-profile.html"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-courses.html"
                      >
                        My Courses
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-order.html"
                      >
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-reviews.html"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-students.html"
                      >
                        Students
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-payouts.html"
                      >
                        Payouts
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../pages/instructor-earning.html"
                      >
                        Earning
                      </a>
                    </li>
                    <li class="dropdown-submenu dropend">
                      <a
                        class="dropdown-item dropdown-list-group-item dropdown-toggle"
                        href="#"
                      >
                        Quiz
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/instructor-quiz.html"
                          >
                            Quiz
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/instructor-quiz-details.html"
                          >
                            Single
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/instructor-quiz-result.html"
                          >
                            Result
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="">
                  <a class="dropdown-item" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    Phone
                  </a>
                </li>
                <li class="">
                  <a class="dropdown-item" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp mb-1 me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default IndNavbar;
