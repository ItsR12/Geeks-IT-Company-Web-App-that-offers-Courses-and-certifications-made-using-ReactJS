import React from "react";
import "../styles/style.css";
import b1 from "../images/b1.png";
import Sidebar from "../components/sidebar";

const UserManage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* sidebar */}
        <Sidebar />

        {/* profile area */}
        <div className="col-10" id="bg">
          <div className="flex-lg-1 h-screen overflow-y-lg-auto">
            <header>
              <div className="container-fluid">
                <div className=" py-6 mt-3 mb-3">
                  <div className="row align-items-center">
                    <div className="col-sm col-12">
                      <h1 className="h2 ls-tight">Roles and Permissions</h1>
                    </div>
                    <div className="col-sm-auto col-12 mt-4 mt-sm-0">
                      <div className="hstack gap-2 justify-content-sm-end">
                        <a
                          href="#modalExport"
                          className="btn btn-sm btn-neutral border-base border px-3 py-2 bg-white"
                          data-bs-toggle="modal"
                        >
                          <span className="pe-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-people-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>{" "}
                          </span>
                          <span>Share</span>{" "}
                        </a>
                        <a
                          href="#offcanvasCreate"
                          className="btn btn-sm px-3 py-2"
                          id="purple-button"
                          data-bs-toggle="offcanvas"
                        >
                          <span className="pe-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus-square-dotted"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 0q-.25 0-.487.048l.194.98A1.5 1.5 0 0 1 2.5 1h.458V0zm2.292 0h-.917v1h.917zm1.833 0h-.917v1h.917zm1.833 0h-.916v1h.916zm1.834 0h-.917v1h.917zm1.833 0h-.917v1h.917zM13.5 0h-.458v1h.458q.151 0 .293.029l.194-.981A2.5 2.5 0 0 0 13.5 0m2.079 1.11a2.5 2.5 0 0 0-.69-.689l-.556.831q.248.167.415.415l.83-.556zM1.11.421a2.5 2.5 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415zM16 2.5q0-.25-.048-.487l-.98.194q.027.141.028.293v.458h1zM.048 2.013A2.5 2.5 0 0 0 0 2.5v.458h1V2.5q0-.151.029-.293zM0 3.875v.917h1v-.917zm16 .917v-.917h-1v.917zM0 5.708v.917h1v-.917zm16 .917v-.917h-1v.917zM0 7.542v.916h1v-.916zm15 .916h1v-.916h-1zM0 9.375v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .916v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .917v.458q0 .25.048.487l.98-.194A1.5 1.5 0 0 1 1 13.5v-.458zm16 .458v-.458h-1v.458q0 .151-.029.293l.981.194Q16 13.75 16 13.5M.421 14.89c.183.272.417.506.69.689l.556-.831a1.5 1.5 0 0 1-.415-.415zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373Q2.25 16 2.5 16h.458v-1H2.5q-.151 0-.293-.029zM13.5 16q.25 0 .487-.048l-.194-.98A1.5 1.5 0 0 1 13.5 15h-.458v1zm-9.625 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zm1.834-1v1h.916v-1zm1.833 1h.917v-1h-.917zm1.833 0h.917v-1h-.917zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                            </svg>{" "}
                          </span>
                          <span>Create</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="py-6 bg-surface-secondary">
              <div
                className="offcanvas offcanvas-end w-full w-lg-1/3"
                data-bs-scroll="true"
                data-bs-backdrop="true"
                tabIndex={-1}
                id="offcanvasCreate"
                aria-labelledby="offcanvasCreateLabel"
              >
                <div className="offcanvas-header border-bottom py-5 bg-surface-secondary">
                  <h5 className="offcanvas-title" id="offcanvasCreateLabel">
                    Add a new role
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset text-xs"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body vstack gap-5">
                  <div className="row g-5">
                    <div className="col-md-12">
                      <div>
                        <label className="form-label">Role name</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Role name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <label className="form-label">Description</label>{" "}
                        <textarea
                          className="form-control"
                          placeholder="Role description ..."
                          rows={2}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Select permissions</label>
                    <div className="list-group list-group-flush gap-3">
                      <div className="list-group-item p-6 bg-surface-secondary border-0 rounded-2">
                        <div className="d-flex">
                          <div className="w-10">
                            <i className="bi bi-folder-plus text-lg text-muted" />
                          </div>
                          <div className="flex-1 me-10">
                            <a href="#" className="d-block h5">
                              Projects
                            </a>
                            <p className="mt-1 text-sm text-muted">
                              Select the permissions you want to add to all the
                              projects in this account.
                            </p>
                          </div>
                        </div>
                        <div className="vstack gap-3 mt-4 ms-10">
                          <div className="d-flex align-items-center">
                            <h6 className="text-sm font-semibold">
                              Can Manage
                            </h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch1"
                                id="switchView1"
                                defaultChecked="checked"
                              />
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="d-flex align-items-center">
                            <h6 className="font-semibold">Can edit</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch1"
                                id="switchEdit1"
                                defaultChecked="checked"
                              />
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="d-flex align-items-center">
                            <h6 className="font-semibold">Can publish</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch1"
                                id="switchPublish1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item p-6 bg-surface-secondary border-0 rounded-2">
                        <div className="d-flex">
                          <div className="w-10">
                            <i className="bi bi-folder-plus text-lg text-muted" />
                          </div>
                          <div className="flex-1 me-10">
                            <a href="#" className="d-block h5">
                              Users
                            </a>
                            <p className="mt-1 text-sm text-muted">
                              Select the permissions you want to add to all the
                              users in this account.
                            </p>
                          </div>
                        </div>
                        <div className="vstack gap-3 mt-4 ms-10">
                          <div className="d-flex align-items-center">
                            <h6 className="text-sm font-semibold">
                              Can Manage
                            </h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch2"
                                id="switchView2"
                              />
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="d-flex align-items-center">
                            <h6 className="font-semibold">Can edit</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch2"
                                id="switchEdit2"
                                defaultChecked="checked"
                              />
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="d-flex align-items-center">
                            <h6 className="font-semibold">Can publish</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch2"
                                id="switchPublish2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item p-6 bg-surface-secondary border-0 rounded-2">
                        <div className="d-flex">
                          <div className="w-10">
                            <i className="bi bi-folder-plus text-lg text-muted" />
                          </div>
                          <div className="flex-1 me-10">
                            <a href="#" className="d-block h5">
                              Payments
                            </a>
                            <p className="mt-1 text-sm text-muted">
                              Select the permissions you want to add to all the
                              projects in this account.
                            </p>
                          </div>
                        </div>
                        <div className="vstack gap-3 mt-4 ms-10">
                          <div className="d-flex align-items-center">
                            <h6 className="text-sm font-semibold">
                              Can Manage
                            </h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch3"
                                id="switchView3"
                                defaultChecked="checked"
                              />
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="d-flex align-items-center">
                            <h6 className="font-semibold">Can edit</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch3"
                                id="switchEdit3"
                                defaultChecked="checked"
                              />
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="d-flex align-items-center">
                            <h6 className="font-semibold">Can publish</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input me-n2"
                                type="checkbox"
                                name="switch3"
                                id="switchPublish3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer py-2 bg-surface-secondary">
                  <button
                    type="button"
                    className="btn btn-sm btn-neutral"
                    data-bs-dismiss="offcanvas"
                  >
                    Close
                  </button>{" "}
                  <button type="button" className="btn btn-sm btn-primary">
                    Save
                  </button>
                </div>
              </div>
              <div
                className="modal fade"
                id="modalExport"
                tabIndex={-1}
                aria-labelledby="modalExport"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content shadow-3">
                    <div className="modal-header">
                      <div className="icon icon-shape rounded-3 bg-soft-primary text-primary text-lg me-4">
                        <i className="bi bi-globe" />
                      </div>
                      <div>
                        <h5 className="mb-1">Share to web</h5>
                        <small className="d-block text-xs text-muted">
                          Publish and share link with anyone
                        </small>
                      </div>
                      <div className="ms-auto">
                        <div className="form-check form-switch me-n2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked="checked"
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex align-items-center mb-5">
                        <div>
                          <p className="text-sm">
                            Anyone with this link{" "}
                            <span className="font-bold text-heading">
                              Can Manage
                            </span>
                          </p>
                        </div>
                        <div className="ms-auto">
                          <a href="#" className="text-sm font-semibold">
                            Settings
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="input-group input-group-inline">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="username"
                            defaultValue="https://webpixels.io/your-amazing-link"
                          />{" "}
                          <span className="input-group-text">
                            <i className="bi bi-clipboard" />
                          </span>
                        </div>
                        <span className="mt-2 valid-feedback">Looks good!</span>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="me-auto">
                        <a href="#" className="text-sm font-semibold">
                          <i className="bi bi-clipboard me-2" />
                          Copy link
                        </a>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-neutral"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>{" "}
                      <button type="button" className="btn btn-sm btn-success">
                        Share file
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="modalAddUsers"
                tabIndex={-1}
                aria-labelledby="modalAddUsers"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content shadow-3">
                    <div className="modal-header justify-content-start">
                      <div className="icon icon-shape rounded-3 bg-soft-primary text-primary text-lg me-4">
                        <i className="bi bi-people" />
                      </div>
                      <div>
                        <h5 className="mb-1">Add members</h5>
                        <small className="d-block text-xs text-muted">
                          Publish and share link with anyone
                        </small>
                      </div>
                    </div>
                    <div
                      className="modal-body py-0 scrollable-y"
                      style={{ maxHeight: 425 }}
                    >
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-3.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Robert Fox
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-1.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Darlene Robertson
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-2.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Theresa Webb
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-3.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Kristin Watson
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-4.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Cody Fisher
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-2.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Robert Fox
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-1.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Darlene Robertson
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-2.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Theresa Webb
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-3.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Kristin Watson
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                        <div className="list-group-item d-flex align-items-center px-0 py-3">
                          <div>
                            <a
                              href="#"
                              className="avatar avatar-sm rounded-circle"
                            >
                              <img alt="..." src="/img/people/img-4.jpg" />
                            </a>
                          </div>
                          <div className="flex-fill ms-4">
                            <a href="#" className="d-block h6 mb-1">
                              Cody Fisher
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="btn btn-sm btn-neutral px-4 py-2 text-xs"
                            >
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="me-auto">
                        <a href="#" className="text-sm font-semibold">
                          <i className="bi bi-clipboard me-2" />{" "}
                          <span className="">Copy link</span>
                        </a>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-neutral"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>{" "}
                      <button type="button" className="btn btn-sm btn-primary">
                        Invite 3 users
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="vstack gap-6">
                  <div className="card border-light-subtle">
                    <div className="card-header d-flex align-items-center p-3 border-0">
                      <h5 className="me-auto">Users</h5>
                      <div className="dropdown">
                        <a
                          className="text-muted"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </a>
                        <div className="dropdown-menu">
                          <a href="#!" className="dropdown-item">
                            Action{" "}
                          </a>
                          <a href="#!" className="dropdown-item">
                            Another action{" "}
                          </a>
                          <a href="#!" className="dropdown-item">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-4 border-top border-bottom border-light-subtle d-flex flex-column flex-sm-row gap-3">
                      <div className="scrollable-x">
                        <div
                          className="btn-group border border-light-subtle p-1"
                          style={{ minWidth: 500 }}
                        >
                          <a
                            href="#"
                            className="btn btn-sm btn-neutral border-end"
                            aria-current="page"
                            id="purple-text"
                          >
                            View all
                          </a>{" "}
                          <a
                            href="#"
                            className="btn btn-sm btn-neutral border-end"
                          >
                            Admin{" "}
                            <span className="text-muted text-xs">(2)</span>
                          </a>{" "}
                          <a
                            href="#"
                            className="btn btn-sm btn-neutral border-end"
                          >
                            Manager{" "}
                            <span className="text-muted text-xs">(2)</span>
                          </a>{" "}
                          <a href="#" className="btn btn-sm btn-neutral">
                            User{" "}
                            <span className="text-muted text-xs">(100)</span>
                          </a>
                        </div>
                      </div>
                      <div className="ms-auto hstack gap-2">
                        <div className="input-group input-group-sm input-group-inline">
                          <span className="input-group-text pe-2 bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-search"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>{" "}
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm px-3 btn-neutral d-flex align-items-center border"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-funnel me-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                            </svg>{" "}
                            <span>Filters</span>{" "}
                            <span className="vr opacity-20 mx-3" />{" "}
                            <span className="small" id="purple-text">
                              2
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover table-nowrap">
                        <thead className="table-light border-light-subtle">
                          <tr>
                            <th scope="col" id="bg">
                              Name
                            </th>
                            <th scope="col" id="bg">
                              Email
                            </th>
                            <th scope="col" id="bg">
                              Role
                            </th>
                            <th scope="col" id="bg">
                              Access
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 1.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Robert Fox
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              robert.fox@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                Admin
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Full Access
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 2.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Darlene Robertson
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              darlene@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                User
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Edit
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 3.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Theresa Webb
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              theresa.webb@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                User
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Edit
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 4.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Kristin Watson
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              cody.fisher@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                Manager
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Manage
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 1.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Cody Fisher
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              jane.cooper@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                Admin
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Full Access
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 2.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Jane Cooper
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              jerome@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                User
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Edit
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 3.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Darlene Robertson
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              darlene@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                User
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Edit
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 4.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Theresa Webb
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              theresa.webb@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                User
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Edit
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 text-body-secondary">
                              <img
                                alt="..."
                                src={require("../images/Person 1.jpg")}
                                width={40}
                                className="avatar avatar-sm rounded-circle me-2"
                              />{" "}
                              <a
                                className="text-heading text-dark font-semibold"
                                id="grey-text"
                                href="#"
                              >
                                Kristin Watson
                              </a>
                            </td>
                            <td className="p-3 text-body-secondary">
                              cody.fisher@example.com
                            </td>
                            <td className="p-3 text-body-secondary">
                              <span className="badge text-uppercase bg-soft-primary  rounded-pill">
                                Manager
                              </span>
                            </td>
                            <td className="p-3 text-body-secondary">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className=""
                                  role="button"
                                  id="grey-text"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Can Manage
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    class="bi bi-chevron-down ms-2"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Full access
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can Manage
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Can publish
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-square btn-neutral me-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>{" "}
                              </a>
                              <button
                                type="button"
                                className="btn btn-sm btn-square btn-neutral text-danger-hover"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer border-0 mb-3" id="bg">
                      <span className="text-muted text-sm">
                        Showing 10 items out of 250 results found
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
