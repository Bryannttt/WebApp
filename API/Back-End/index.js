
// sample express server
const express = require('express');
const { PrismaClient } = require('@prisma/client')
//const cors = require('cors');
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;
//app.use(cors());
// Sample data
class ProjectObject{
  constructor(projectId,projectName){
    this.projectId=projectId;
    this.projectName=projectName;
  };
};

class FileObject{
  constructor(fileId,fileName,fileSize,fileType,projectId){
    this.fileId=fileId;
    this.fileName=fileName;
    this.fileSize=fileSize;
    this.fileType=fileType;
    this.projectId=projectId;
  };
};

const projectSet = new Set();
const fileSet= new Set();

const project1 = new ProjectObject(1,"Project 1");
const project2 = new ProjectObject(2,"Project 2");
const project3 = new ProjectObject(3,"Project 3");

projectSet.add(project1);
projectSet.add(project2);
projectSet.add(project3);

const file1 = new FileObject(1,"A",64,"text",1);
const file2 = new FileObject(2,"B",128,"text",1);
const file3 = new FileObject(3,"C",4096,"text",1);

const file4 = new FileObject(4,"D",512,"text",2);
const file5 = new FileObject(5,"E",1024,"text",2);
const file6 = new FileObject(6,"F",2048,"text",2);
const file7 = new FileObject(7,"G",8192,"image",2)

const file8 = new FileObject(8,"H",2048,"text",3);
const file9 = new FileObject(9,"I",8192,"image",3)

fileSet.add(file1);
fileSet.add(file2);
fileSet.add(file3);

fileSet.add(file4);
fileSet.add(file5);
fileSet.add(file6);
fileSet.add(file7);

fileSet.add(file8);
fileSet.add(file9);

function getFilesByProjectId(set, projectId){
  const ret = [];
  for (let obj of set){
    if (parseInt(obj.projectId) === parseInt(projectId)){
      ret.push(obj);
    }
  }
  console.log(ret);
  return ret.length > 0 ? ret : null;
}

// GET METHOD

app.get('/api/projects', async (req, res) => {
  console.log("Request Made");
  res.json([...projectSet]);
});

app.get('/api/files/byProjectId', async (req, res) => {
  console.log("Request Made");
  const projectId = req.query.id; // Get projectId from query parameter
  const ret = getFilesByProjectId(fileSet, projectId);
  res.json(ret);
});

app.listen(PORT, (err) => {
  if (err){
    return console.log('Error:', err);
  }

  console.log('Server is running on port ' + PORT);

  // const axios = require('axios');
  // axios.get(`http://localhost:${PORT}/api/projects`)
  //   .then(response => {
  //     console.log("Response from server:", response.data);
  //   })
  //   .catch(error => {
  //     console.log("Error making the request:", error)
  //   });
  // axios.get(`http://localhost:${PORT}/api/files/byProjectId?`) // Pass projectId as a query parameter
  //   .then(response => {
  //     console.log("Response from server:", response.data);
  //   })
  //   .catch(error => {
  //     console.error("Error making request:", error)
  //   });
});
