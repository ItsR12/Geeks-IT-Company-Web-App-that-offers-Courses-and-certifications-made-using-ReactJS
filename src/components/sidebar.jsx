import React from "react";
import "../styles/style.css";

const Sidebar = () => {
  return (
    <div className="col-2">
      <div className="flex-shrink-0 p-0" style={{ height: "100vh" }}>
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none p-3"
        >
          <img src={require("../../src/images/Geeks.png")} alt="" width={100} />
        </a>
        <ul className="list-unstyled ps-0">
          {/* Home */}
          <a href="/">
            <li className="mb-1" id="menu-hover">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                Home
              </button>
            </li>
          </a>
          {/* Dashboard */}
          <a href="/userdashboard">
            <li className="mb-1" id="menu-hover">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                <i class="bi bi-speedometer2 me-3"></i>
                Dashboard
              </button>
            </li>
          </a>
          {/* Documents */}
          <a href="/userdocs">
            <li className="mb-1" id="menu-hover">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                <i class="bi bi-file-earmark-post me-3"></i>
                Documents
              </button>
            </li>
          </a>
          {/* User management */}
          <a href="/usermanage">
            <li className="mb-1" id="menu-hover">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                <i class="bi bi-people-fill me-3"></i>
                User Management
              </button>
            </li>
          </a>
          {/* Settings */}
          <li className="mb-1" id="menu-hover">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#settings-collapse"
              aria-expanded="false"
            >
              <i class="bi bi-gear me-3"></i>
              Settings
            </button>
            <div className="collapse" id="settings-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
                <li className="p-1 ms-4">
                  <a
                    href="/usersetting"
                    className="d-inline-flex text-decoration-none rounded"
                    id="grey-text"
                  >
                    General
                  </a>
                </li>
                <li className="p-1 ms-4">
                  <a
                    href="#"
                    className="d-inline-flex text-decoration-none rounded"
                    id="grey-text"
                  >
                    Security
                  </a>
                </li>
                <li className="p-1 ms-4">
                  <a
                    href="#"
                    className="d-inline-flex text-decoration-none rounded"
                    id="grey-text"
                  >
                    Notification
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3" />

          {/* User */}
          <div className="my-4 px-lg-6 position-relative">
            <div className="dropup w-full">
              <button
                className="btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center bg-tertiary rounded-2 border border-light-subtle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-3">
                  <img
                    alt="..."
                    src={require("../images/AI - Person 1.jpg")}
                    width={40}
                    className="avatar avatar-sm rounded-circle"
                  />{" "}
                </span>
                <span className="flex-fill text-start text-sm font-semibold">
                  Rajat B{" "}
                </span>
                <span>
                  <i className="bi bi-chevron-expand text-white text-opacity-70" />
                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end w-full">
                <div className="dropdown-header">
                  <span className="d-block text-sm text-muted mb-1">
                    Signed in as
                  </span>{" "}
                  <span className="d-block text-heading font-semibold">
                    Rajat B
                  </span>
                </div>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="bi bi-house me-3" />
                  Home{" "}
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-pencil me-3" />
                  Profile{" "}
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-gear me-3" />
                  Settings
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="bi bi-box-arrow-left me-3" />
                  Logout
                </a>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center align-items-center mt-6 d-none">
              <div>
                <i className="bi bi-moon-stars me-2 text-warning me-2" />{" "}
                <span className="text-heading text-sm font-bold">
                  Dark mode
                </span>
              </div>
              <div className="ms-auto">
                <div className="form-check form-switch me-n2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="switch-dark-mode"
                  />
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
