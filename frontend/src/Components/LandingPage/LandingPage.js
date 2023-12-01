import { useEffect, useState } from "react";
import "../LandingPage/landingPage.css"
import { useNavigate} from "react-router-dom";

import axios from "axios";


function LandingPage(){

  let navigate = useNavigate()

let [allData,setAllData] = useState({});
let [ resourceid, setResourceId ] = useState("");
let [ msg,setmsg] = useState("");
let [ levels,setlevels] = useState("");
let [time,settime] = useState("");
let [traceid,setTraceId] = useState("");
let [ spanid,setSpanId] = useState("");
let [ commits,setcommits] = useState("");
let [parent,setparent ] = useState("");
let [ filter, setFilter] = useState({regexResourceId : "server-.*"});

let funResourceId = (e) => {
  setResourceId(e.target.value);
  console.log(resourceid)

};

let funlevel = (e) => {
  setlevels(e.target.value);

};

let funmsg = (e) => {
  setmsg(e.target.value);

};
let funtime = (e) => {
  settime(e.target.value);

};
let funTraceId = (e) => {
  setTraceId(e.target.value);

};
let funSpanId = (e) => {
  setSpanId(e.target.value);

};
let funCommit = (e) => {
  setcommits(e.target.value);

};
let funparent = (e) => {
  setparent(e.target.value);

};

const get_all_logs = async () => {
  try {
    let { data } = await axios.get("http://localhost:3000/api/all_logs");
    console.log(data);
    const result = data.result;
    console.log("result", result);
    setAllData(result);
  } catch (error) {
    console.log(error);
  }
};

let filterOperation = async (filter) => {
  let URL = "http://localhost:3000/api/filter";

  try {
    let {data} = await axios.post(URL, filter);
    // console.log(response);

 
    const result = data.result;
    console.log("result", result);
  setAllData(result);


  } catch (error) {
    // alert("server error");
  

    console.log(error);
  }
};
let makeFiltration = (event, type) => {
  
  let value = event.target.value;
  switch (type) {
    case "level":
      if ((value) !== "0") {
        filter["level"] = value;
      } else {
        delete filter["level"];
      }
      break;
    case "message":
      if ((value) !== "0") {
        filter["message"] = value;
      } else {
        delete filter["message"];
      }
      break;
    case "resourceId":
      filter["regexResourceId"] = String(resourceid);
      break;
    case "traceId":
      filter["regexTraceId"] = traceid;
      break;
    case "spanId":
      filter["regexSpanId"] = spanid;
      break;
    case "parentId" :
      filter["regexParentResourceId"]= parent;
      break;
      case "commit" :
      filter["regexCommit"]= commits; 
        break;
      

    
  //   case "cost-for-two":
  //     let costForTwo = value.split("-");
  //     filter["lcost"] = Number(costForTwo[0]);
  //     filter["hcost"] = Number(costForTwo[1]);
  //     break;
 
    
  }
  setFilter(filter);
  filterOperation(filter);


};

console.log("filter",filter);
useEffect(()=>{
  get_all_logs();
},[])

console.log(allData.length)
    return (
        <>
          <div className="container-fluid">
            <p className="headings fw-bolder fs-1 ms-5 mb-0">
            Get all the Log Details here  !!!
            </p>
            <div className="row mt-4">
              {/* filter section */}
              <div className="col-10 col-lg-3 filter-section ms-5 me-5 fw-bolder p-4  ">
                {/* <p className="fs-4 fw-bolder mb-0">Filter Section</p> */}
            {/* Resource */}
                <p className="fs-md-3 fs-5 fw-bolder mb-2  w-md-25 w-lg-25 ">
                 Resource Id...
                </p>
                <div className="form-floating  border border-1 border-dark d-flex justify-content-between p-2 mb-2 ">
                  <input
                    type="text"
                    className="form-control w-75 p-3 "
                    id="floatingInput"
                    value={resourceid}
                    onChange={funResourceId}
                    placeholder="Write the Resource Id"
                  />
                  <label htmlFor="floatingInput" class>
                    Search The log data
                  </label>
                  <button
                   onClick={(event) => {
                      makeFiltration(event, "resourceId");
                    }} 
                  className="searchbutton w-25">
                    Search
                  </button>
                </div> 
             
        
            {/* level */}
            
                <div>
                  <p className="fs-md-3 fs-5 fw-bolder mb-2   w-md-25 w-lg-25 ">
                    Level...
                  </p>
                  <select
                    className="form-control border border-dark text-dark "
                    // value={roomtype}
                    // onChange={(e) => {
                    //   filterByType(e);
                    // }}
                    onChange={(event) => {
                      makeFiltration(event, "level");
                    }}
                  >
                  <option value = "0"className="text-dark" >
                    select                  </option>
                    <option value="info" className="text-dark">
                      Info
                    </option>
                    <option value="error" className="text-dark">
                      error
                    </option>
                    <option value="warning" className="text-dark">
              Warning
                    </option>
                  </select>
                </div>
               
               {/* message */}
               <div>
                  <p className="fs-md-3 fs-5 fw-bolder mb-2   w-md-25 w-lg-25 ">
                    Message...
                  </p>
                  <select
                    className="form-control border border-dark text-dark "
                    // value={roomtype}
                    // onChange={(e) => {
                    //   filterByType(e);
                    // }}
                    onChange={(event) => {
                      makeFiltration(event, "message");
                    }}
                  >
                  <option value = "0" className="text-dark">
                    select
                  </option>
                    <option value="Failed to connect to DB" className="text-dark">
                    Failed to connect to DB
                    </option>
                    <option value="Request processed successfully" className="text-dark">
                    Request processed successfully
                    </option>
                    <option value="High CPU Usage detected" className="text-dark">
                    High CPU Usage detected
                    </option>
                  </select>
                </div>
    
                {/*trace id  */}
                <p className="fs-md-3 fs-5 fw-bolder mb-2  w-md-25 w-lg-25 ">
               Trace Id...
                </p>
                <div className="form-floating  border border-1 border-dark d-flex justify-content-between p-2 mb-2 ">
                  <input
                    type="text"
                    className="form-control w-75 p-3 "
                    id="floatingInput"
                    value={traceid}
                    onChange={funTraceId}
                    placeholder="Write the Resource Id"
                  />
                  <label htmlFor="floatingInput" class>
                    Search through Trace Id
                  </label>
                  <button
                   onClick={
                    (event) => {
                      makeFiltration(event, "traceId");
                    }
                } 
                  className="searchbutton w-25">
                    Search
                  </button>
                </div> 

{/* Commit Number */}
<p className="fs-md-3 fs-5 fw-bolder mb-2  w-md-25 w-lg-25 ">
                Commit Number..
                </p>
                <div className="form-floating  border border-1 border-dark d-flex justify-content-between p-2 mb-2 ">
                  <input
                    type="text"
                    className="form-control w-75 p-3 "
                    id="floatingInput"
                    value={commits}
                    onChange={funCommit}
                    placeholder="Write the Resource Id"
                  />
                  <label htmlFor="floatingInput" class>
                    Enter Commit Number
                  </label>
                  <button
                   onClick={(event) => {
                      makeFiltration(event, "commit");
                    }} 
                  className="searchbutton w-25">
                    Search
                  </button>
                </div> 

                {/* Span Id */}
                <p className="fs-md-3 fs-5 fw-bolder mb-2  w-md-25 w-lg-25 ">
          Span Id...
                </p>
                <div className="form-floating  border border-1 border-dark d-flex justify-content-between p-2 mb-2 ">
                  <input
                    type="text"
                    className="form-control w-75 p-3 "
                    id="floatingInput"
                    value={spanid}
                    onChange={funSpanId}
                    placeholder="Write the Resource Id"
                  />
                  <label htmlFor="floatingInput" class>
                  Enter Span Id
                  </label>
                  <button
                   onClick={(event) => {
                      makeFiltration(event, "spanId");
                    }} 
                  className="searchbutton w-25">
                    Search
                  </button>
                </div> 

                {/* parent resource Id */}
                <p className="fs-md-3 fs-5 fw-bolder mb-2  w-md-25 w-lg-25 ">
               Parent Resource Id...
                </p>
                <div className="form-floating  border border-1 border-dark d-flex justify-content-between p-2 mb-2 ">
                  <input
                    type="text"
                    className="form-control w-75 p-3 "
                    id="floatingInput"
                    value={parent}
                    onChange={funparent}
                    placeholder="Write the Resource Id"
                  />
                  <label htmlFor="floatingInput" class>
                   Enter Parent ResourceId
                  </label>
                  <button
                   onClick={(event) => {
                      makeFiltration(event, "parentId");
                    }} 
                  className="searchbutton w-25">
                    Search
                  </button>
                </div> 


                {/* clear */}
                <div className="d-flex justify-content-center">
                <button  className = "w-50"onClick={()=>{ window.location.reload();}}>
                  Clear All
                </button>
                </div>
              
              </div>
              <div className=" col-10 col-lg-7 room-section ms-lg-3 mt-lg-0 mt-5 ms-5">
              {allData.length > 0 ? 
                ( allData.map((details,index) => {
              return (
                <>
                  <div className="row room-sec d-flex mb-5 ">
                 

                    <div className="descrip-box mt-3">
                      {/* name,description,maxcount,rating,image,roomtype,locality and city,facility */}
                      <p className="ms-3 fw-bold headings fs-2">
                        {index+1}
                      </p>
                      <div className="row ms-3">
                        <div className="col-5">
                          <p className="fw-bold fs-5">
                         Level
                          </p>
                          <p className="fw-bold fs-5">Message</p>
                          {/* <p className="fw-bold fs-5">Facilities</p> */}
                          <p className="fw-bold fs-5 ">Resource Id</p>
                          <p className="fw-bold fs-5">timestamp</p>
                          <p className="fw-bold fs-5">Trace Id</p>
                          <p className="fw-bold fs-5">Span Id</p>
                          <p className="fw-bold fs-5">Commit</p>
                          <p className="fw-bold fs-5">Parent Resource Id</p>
                        </div>
                        <div className="col-5 fs-5">
                          <p className="fs-5">{details.level}</p>
                          {/* <p>8.1</p> */}
                          <p class="badge rounded-pill bg-danger fs-6 ">
                           {details.message}
                          </p>
                          {/* <p>{roomdetails.facilities}</p> */}
                          <p>{
                            details.resourceId
                          }</p>
                          
                          <p>{details.timestamp}</p>
                          <p>
                         {details.traceId}
                          </p>
                          <p>
                         {details.spanId}
                          </p>
                          <p>
                         {details.commit}
                          </p>
                          <p>
                         {details.metadata.parentResourceId}
                          </p>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </>
              );
            })): (
            
              <div className=" not-found-section pt-3" >
    
             <h1 className="  mb-0 text-error "> NO Logs Found !!!</h1>
                <div className="not-found-sub"> 
                <img src="Images/No_data.jpg" className="not-found-img"></img>
                </div>
    
                </div>
          
                )
           
              }
              </div>
            </div>
          </div>
        </>
    )
}

export default LandingPage;