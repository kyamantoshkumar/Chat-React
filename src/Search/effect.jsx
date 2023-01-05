import React from "react"

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
  
    React.useEffect(() => {
      setCounter(c => c + 1);
    }, []);
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Counter: {counter}</h1>
      </div>
    );
  };

  export default Counter

/*
  import React, { useState, useRef, useContext } from "react";
  import {
    Box,
    Typography,
    Container,
    Button,
    Grid,
    IconButton,
  } from "@material-ui/core";
  import useGlobalStyles from "../../utils/global-style";
  import clsx from "clsx";
  import Api from "../../utils/api";
  import AuthService from "../../utils/services/auth-service";
  import {
    DEFAULT_ERROR_CALLBACK,
    SHOW_INFO_NOTIFICATION,
    SHOW_SUCCESS_NOTIFICATION,
  } from "../../utils/app-util";
  import AppConstants from "../../utils/app-constants";
  import DataService from "../../utils/services/data-service";
  import { TextInput } from "sixsprints-react-ui";
  import { isRequired } from "../../utils/validations";
  import { Form } from "informed";
  import CustomDatePicker from "../../components/form/date-picker";
  import Loader from "../../components/layout/loader";
  import BackIcon from "@material-ui/icons/ArrowBackOutlined";
  import { useHistory } from "react-router-dom";
  import { useEffect } from "react";
  import axios from "axios";
  import { SampleContext } from "../../contexts/SampleContext";
  
  import { async } from "rxjs/internal/scheduler/async";
  
  const AddReport = () => {
    const gClasses = useGlobalStyles();
    const user = AuthService.getUser();
    const [isLoading, setIsLoading] = useState(false);
    const reportName = useRef(null);
    console.log(reportName);
    const formApi = useRef();
    let history = useHistory();
    const [uimages, setImages] = useState([]);
  
    const [buttontext, setbuttontext] = useState("");
    const [fuimages, setfImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
  
    const [report, setReport] = useState();
    const [value, setValue] = useState();
    const [date, setDate] = useState();
    const [fileu, setFileU] = useState();
    const [doctorReport, setDoctorReport] = useState(true);
    const [allDoc, setAllDoc] = useState();
    const [docslug, setDocSlug] = useState();
    const { back1, back2 } = useContext(SampleContext);
    const [reportD, setReportD] = useState();
    const [loader, setloader] = useState(false);
  
    useEffect(() => {
      if (report?.length > 0 && value?.length > 0 && uimages?.length > 0  && (reportD != undefined)) {
        setDoctorReport(false);
      } else {
        setDoctorReport(true);
      }
    });
  
    console.log(report?.length);
    console.log(value?.length);
    console.log(uimages?.length);
    console.log(reportD?.length);
    console.log(reportD);
  
  
    useEffect(() => {
      if (uimages.length < 1) return;
  
      const newImageUrls: any = [];
  
      uimages.forEach((image: any) =>
        newImageUrls.push(URL.createObjectURL(image))
      );
      setImageURLs(newImageUrls);
    }, [uimages]);
  
    function onImageChange(e: any) {
      handleUploadFiles(Array.prototype.slice.call(e.target.files));
      setImages([...e.target.files]);
    }
  
    const handleUploadFiles = (files) => {
      const uploaded = [...fuimages];
      files.some((file) => {
        uploaded.push(file);
      });
      setfImages(uploaded);
    };
  
    const onTypeSelected = (e) => {
      setDocSlug(e.target.value);
    };
  
    useEffect(() => {
      Api.get(`getdoctor?forPatient=${user.slug}`).subscribe(
        (resp) => {
          setAllDoc(resp?.data);
        },
        (error) => {}
      );
    }, []);
  
    const handleSubmit = async (val) => {
      setloader(true);
      setDocSlug();
      val.preventDefault();
      const formData = new FormData();
      if (uimages.length > 0) {
        for (let i = 0; i < uimages.length; i++) {
          formData.append("files", uimages[i]);
        }
      } else {
        SHOW_INFO_NOTIFICATION(AppConstants.MSG.SELECT_FILE_MSG);
        setloader(false);
        return;
      }
      formData.append("action", "SAVE");
      formData.append("patientSlug", user.slug);
      formData.append("reportDate", reportD);
      formData.append("reportName", report);
      formData.append("value", value);
      if (docslug?.length > 0) {
        formData.append("withMessage", true);
        formData.append("doctorSlug", docslug);
      }
  
      const token = AuthService.getToken();
      try {
        const response = await axios({
          method: "post",
          url: `${AppConstants.apibaseURL1}/report/add`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "X-AUTH-TOKEN": token,
          },
        });
        if (response) {
          SHOW_SUCCESS_NOTIFICATION(AppConstants.MSG.REPORT_ADD_SUCESS);
          window.location.replace("/report");
          setloader(false);
        }
      } catch (error) {}
    };
  
    return (
      <div className="row w-100" style={back1}>
        <div className="col-md-12 mx-auto" style={{"marginTop":"80px"}}>
          <div className="">
            <div className="d-grid gap-2 back1 ps-5">
            <div style={{cursor: "pointer"}}>
                  <div style={back1} onClick={()=>{history.goBack();}}>
                    <span className="me-2">
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    <span>Report</span>
                  </div>
                </div>
              <div className="col-12">
                <input
                  type="file"
                  className="form-control"
                  id="signature"
                  autocomplete="off"
                  name="paym[]"
                  validate={isRequired}
                  validateOnMount
                  validateOnChange
                  multiple
                  accept="image/*"
                  onChange={onImageChange}
                  style={{ visibility: "hidden" }}
                />
  
                <Box mt={2}>
                  <Grid container spacing={3}>
                    {imageURLS.map((imageSrc, index) => (
                      <Grid key={index} item xs={12} sm={3}>
                        <Box
                          mb={2}
                          p={2}
                          textAlign="center"
                          style={{ backgroundColor: "white" }}
                        >
                          <a
                            href={imageSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt="report"
                              height={150}
                              width={150}
                              src={imageSrc}
                            />
                          </a>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
  
                <label htmlFor="signature">
                  <div className="file btn btn-primary fileupbutton">
                    Select files to Upload
                  </div>
                </label>
                <div></div>
              </div>
            </div>
  
            <div className="delete  row mb-2">
              <div
                className="col-md-3 d-flex align-items-center mb-2"
                style={{ gap: "50px" }}
              >
                <img
                  className="  ps-5"
                  src="./images/hos.png"
                  alt=""
                  style={{ maxWidth: "223px" }}
                />
              </div>
            </div>
  
            <form className="mb-2 p-5">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Report Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  onChange={(e) => setReport(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Value*
                </label>
                <input
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Report Date*
                </label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setReportD(new Date(e.target.value).getTime())}
                />
              </div>
  
              {loader ? (
                <button class="btn btn-dark" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <div className=" mb-2">
                  <button
                    disabled={doctorReport}
                    className="btn btn-dark me-2"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-dark"
                    disabled={doctorReport}
                    onClick={(e)=> e.preventDefault()}
                    data-bs-toggle="modal"
                    data-bs-target="#reportModal"
                  >
                    Send Doctor on Chat
                  </button>
                </div>
              )}
              </form>
  
            <div
              className="modal fade"
              id="reportModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" style={back2}>
                <div className="modal-content" style={back2}>
                  <div className="modal-header" style={back2}>
                    <h5 className="modal-title" id="exampleModalLabel" style={back2}>
                      Send to Doctor
                    </h5>
                    <span className="fs-5" data-bs-dismiss="modal" style={back2}><i class="fa fa-times"></i></span>
  
                  </div>
                  <div className="modal-body" style={back2}>
                    <select
                      className="form-select form-control-lg back1"
                      aria-label="Default select example"
                      onChange={onTypeSelected}
                    >
                      <option value="">
                          Select Doctor
                      </option>
                      {allDoc?.map((item, index) => {
                        return <option value={item?.slug}>{item?.name}</option>;
                      })}
                    </select>
                  </div>
                  <div className="modal-footer" style={back2}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      style={back2}
                    >
                      Close
                    </button>
                    <button type="button" onClick={(e) => handleSubmit(e)} className="btn btn-success" >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddReport;
  */