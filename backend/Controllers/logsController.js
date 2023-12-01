const express = require("express")

const LogsModal = require("../Modals/logsdata")

module.exports.get_all_logs_data = async (request,response) =>{
try{
    let result = await LogsModal.find({})
    response.status(200).send({
        status:true,
        result
    });
}
catch(error){
    response.status(500).send({status:false,
        error,
    message:"server error,contact to admin"});
}
}


const allowedLevels = ["error", "info", "warning"];
const allowedMessages = ["Failed to connect to DB", "Request processed successfully", "High CPU Usage detected"];

module.exports.filterData = async (req,res)=>
{  try {
    // Validate and get the level value from the body parameter
    const level = req.body.level;
 

    const message = req.body.message;
 
    const regexResourceId = req.body.regexResourceId;
    const regexCommit = req.body.regexCommit;
    const regexSpanId = req.body.regexSpanId;
    const regexParentResourceId = req.body.regexParentResourceId;
    const regexTraceId = req.body.regexTraceId;
 
    const filter = {};
    if (level) filter.level = level;
    if (message) filter.message = message;
   
    // Add other filters as needed...
    if (req.body.timestamp) filter.timestamp = req.body.timestamp;

//       // Regular expression search
// const resourceId = req.body.resourceId;
// 
//     const regexSearch = req.body.regexSearch;
//       const regexFilter = {};
//       if (regexSearch) {
//         regexFilter.$regex = new RegExp(regexSearch, 'i');
//       }
//        if (resourceId) filter.resourceId = resourceId;
//   if(regexSearch) filter.traceId = regexFilter;
//   if(regexSearch)  filter.spanId = regexFilter;
//   if(regexSearch) filter.commit = regexFilter;
//   if(regexSearch) filter['metadata.parentResourceId'] = regexFilter;
    // Retrieve data based on filters

//     const startDate = req.body.startDate;
//     const endDate = req.body.endDate;
//     const timestampFilter = {};
//     if (startDate) timestampFilter.$gte = new Date(startDate);
//     if (endDate) timestampFilter.$lte = new Date(endDate);

// console.log(new Date(startDate));

//     if(startDate && endDate) filter.timestamp = timestampFilter;
    if (regexResourceId) filter.resourceId = new RegExp(regexResourceId, 'i');

    if (regexCommit) filter.commit = new RegExp(regexCommit, 'i');
    if (regexSpanId) filter.spanId = new RegExp(regexSpanId, 'i');
    if (regexParentResourceId) filter['metadata.parentResourceId'] = new RegExp(regexParentResourceId, 'i');
    if( regexTraceId) filter.traceId = new RegExp(regexTraceId, 'i');
    const result = await LogsModal.find(filter);
    console.log("length",result.length)
    // Send the filtered data as a JSON response
    res.status(200).send({
        status:true,
        result
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
