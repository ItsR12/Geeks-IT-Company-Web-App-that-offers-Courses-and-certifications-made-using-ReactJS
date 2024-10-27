import React from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="containerfluid">
      {/* Login */}
      <div className="content" id="content-container">
        <div
          class="modal modal-sheet position-static d-block p-4 py-md-5"
          tabindex="-1"
          role="dialog"
          id="content-container"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content rounded-2 border-white shadow p-0 mb-5">
              <div class="modal-header p-5 pb-4 border-bottom-0">
                {/* <h1 class="fw-bold mb-0 fs-2">Sign in</h1> */}
                <div>
                  <a href="../index.html">
                    <img
                      src={require("../images/Geeks.png")}
                      class="mb-4"
                      alt="logo-icon"
                      width={100}
                    />
                  </a>
                  <div class="d-flex flex-column gap-1">
                    <h3 class="mb-0 fw-bold">Sign up</h3>
                    <span>
                      Already have an account?
                      <a href="/login" class="ms-1" id="purple-text">
                        Sign in
                      </a>
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => navigate("/")}
                ></button>
              </div>

              <div class="modal-body p-5 pt-0">
                <form class="">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control rounded-2"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control rounded-2"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control rounded-2"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check text-start mb-4">
                    {/* <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="remember-me"
                      id="flexCheckDefault"
                      required
                    /> */}
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="rememberme"
                      required=""
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <span>
                        I agree to the
                        <a
                          href="terms-condition-page.html"
                          id="purple-text"
                          className="me-1 ms-1"
                        >
                          Terms of Service
                        </a>
                        and
                        <a
                          href="terms-condition-page.html"
                          className="me-1 ms-1"
                          id="purple-text"
                        >
                          Privacy Policy.
                        </a>
                      </span>
                    </label>
                  </div>
                  <button
                    class="w-100 mb-2 btn btn-lg rounded-1 btn-primary fw-semibold"
                    type="submit"
                    id="purple-button"
                    style={{ fontSize: "14px" }}
                  >
                    Sign up
                  </button>

                  <div className="my-3 border-bottom"></div>
                  <h2 class="fs-5 fw-bold mb-3 d-flex justify-content-center">
                    Or
                  </h2>
                  <button
                    class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-1"
                    type="submit"
                  >
                    <img
                      src={require("../../src/images/IT - Google icon.png")}
                      alt=""
                      style={{ width: "20px" }}
                      className="me-2"
                    />
                    Sign in with Google
                  </button>
                  <button
                    class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-1"
                    type="submit"
                  >
                    <img
                      src={require("../../src/images/IT - Microsoft icon.png")}
                      alt=""
                      style={{ width: "20px" }}
                      className="me-2"
                    />
                    Sign in with Microsoft
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
