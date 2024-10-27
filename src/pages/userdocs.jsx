import React from "react";
import "../styles/style.css";
import b1 from "../images/b1.png";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const UserDocs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* sidebar */}
        <Sidebar />

        {/* profile area */}
        <div className="col-10" id="bg">
          <div className="col-lg-9 col-md-8 col-12">
            {/* Card */}
            <div className="card mt-2 border-0">
              {/* Card header */}
              <div className="card-header">
                <h4 className="mb-0 fw-bold">Documents</h4>
              </div>
            </div>

            {/* Documents */}
            <div class="list-group mt-2 border-0">
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3 border-0"
                aria-current="true"
              >
                <img
                  src={require("../images/Zidio Development logo square.jpg")}
                  alt="twbs"
                  width="50"
                  height="50"
                  class="border rounded-circle flex-shrink-0"
                />
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">2 Year Experience Letter</h6>
                    <p class="mb-0 opacity-75">
                      First company experience letter
                    </p>
                  </div>
                  <a href="path/to/yourfile.pdf" download="filename.pdf">
                    <button className="bg-white border-0">
                      <i
                        class="bi bi-download"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Download"
                      ></i>
                    </button>
                  </a>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3 border-0"
                aria-current="true"
              >
                <img
                  src={require("../images/Zidio Development logo square.jpg")}
                  alt="twbs"
                  width="50"
                  height="50"
                  class="border rounded-circle flex-shrink-0"
                />
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">Zidio Internship Certificate</h6>
                    <p class="mb-0 opacity-75">For Web Development</p>
                  </div>
                  <a href="path/to/yourfile.pdf" download="filename.pdf">
                    <button className="bg-white border-0">
                      <i
                        class="bi bi-download"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Download"
                      ></i>
                    </button>
                  </a>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action border-0 d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src={require("../images/Zidio Development logo square.jpg")}
                  alt="twbs"
                  width="50"
                  height="50"
                  class="border rounded-circle flex-shrink-0"
                />
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">Zidio Internship Certificate</h6>
                    <p class="mb-0 opacity-75">For UI/UX</p>
                  </div>
                  <a href="path/to/yourfile.pdf" download="filename.pdf">
                    <button className="bg-white border-0">
                      <i
                        class="bi bi-download"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Download"
                      ></i>
                    </button>
                  </a>
                </div>
              </a>
            </div>

            {/* Add documents */}
            <div class="card-body mt-5">
              <form>
                <div class="mb-3">
                  <label for="siteName" class="form-label text-dark">
                    Document Name
                  </label>
                  <input
                    class="form-control"
                    id="siteName"
                    placeholder="Your Document Name"
                    type="text"
                    required=""
                  />
                </div>
                <div class="mb-3">
                  <label for="siteName" class="form-label text-dark">
                    Description
                  </label>
                  <input
                    class="form-control"
                    id="siteName"
                    placeholder="Your Document Description"
                    type="text"
                    required=""
                  />
                </div>

                <div class="mb-3">
                  <p class="mb-1 text-dark">Upload Document Photo</p>
                  <div class="input-group mb-1">
                    <input type="file" class="form-control" id="inputLogo" />
                    <label class="input-group-text" for="inputLogo">
                      Upload
                    </label>
                  </div>
                  <small class="">
                    Document size should be between 1Kb - 10 Mb
                  </small>
                </div>

                <div class="mb-3">
                  <p class="mb-1 text-dark">Upload Document</p>
                  <div class="input-group mb-1">
                    <input type="file" class="form-control" id="inputLogo" />
                    <label class="input-group-text" for="inputLogo">
                      Upload
                    </label>
                  </div>
                  <small class="">
                    Document size should be between 1Kb - 10 Mb
                  </small>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mt-2"
                  id="purple-button"
                >
                  Upload Document{" "}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default UserDocs;
