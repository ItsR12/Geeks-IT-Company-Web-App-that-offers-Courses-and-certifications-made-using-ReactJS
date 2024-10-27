import React from "react";
import b1 from "../images/b1.png";

const HeroCerti = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="py-md-8 py-6"
        style={{
          backgroundImage: `url(${b1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "50vh",
        }}
      >
        <div className="container py-lg-6">
          <div className="row align-items-center gy-4 justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-md-10">
              <div className="d-flex flex-column gap-4 text-center">
                <div className="d-flex flex-column gap-0">
                  <div className="h1 display-6 fw-bold mt-5">
                    Certificate Verification Portal
                  </div>
                  <p id="grey-text">
                    Get all your certificates from Internship to Experience
                    certificates verified here. Its quick, safe and relaible.
                  </p>
                </div>
                <div className="d-flex flex-column gap-3">
                  <form>
                    <div className="input-group mb-3">
                      <input
                        // type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Certificate Number"
                        aria-label="Search by Skills"
                        aria-describedby="basic-addon2"
                        id="cert-number"
                      />
                      <button
                        className="btn btn-primary btn-lg"
                        id="purple-button"
                        onClick={(e) => {
                          e.preventDefault();
                          const num =
                            document.getElementById("cert-number").value;
                          const status = document.getElementById("status");
                          if (num.length === 6 && num % 2 === 0) {
                            status.textContent = "Verified";
                            status.style.color = "green";
                          } else {
                            status.textContent = "Not Verified";
                            status.style.color = "red";
                          }
                        }}
                      >
                        Verify
                      </button>
                      {/* <p id="status"></p> */}
                    </div>
                  </form>
                  <p id="status">
                    <button
                      className="btn mt-1 mb-1 btn btn-sm  mb-0  border me-2"
                      id="navbutton"
                    >
                      Click to download Certificate after verification
                    </button>
                  </p>
                  <div className="gap-2 d-flex flex-wrap justify-content-center">
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Appreciation
                    </a>
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Achievement
                    </a>
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Course
                    </a>
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Experience
                    </a>
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Internship
                    </a>
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Participation
                    </a>
                    <a
                      href="#!"
                      className="btn btn-tag btn-sm border rounded-pill fw-medium"
                      id="skills"
                    >
                      Membership
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCerti;
