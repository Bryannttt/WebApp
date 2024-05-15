


import Image from "next/image";
import LetterBox from "@/components/letterbox";
import axios from "axios";
import Link from "next/link";

 

// Define the interface for a project object

interface ProjectObject {

  projectId: number;

  projectName: string;

}

 

// Function to fetch projects from the API

async function GetProjectsFolder() {

  // Make a GET request to the API endpoint

  const data = await axios.get('http://127.0.0.1:3001/api/projects');

 

  // Return the response data

  return data;

}

 

// Default export: React component to display projects

export default async function ProjectsPage() {

  // Call the GetProjectsFolder function to fetch projects

  const dataTemp = GetProjectsFolder();

  // Extract project data from the response and cast it to ProjectObject array

  const projectData: ProjectObject[] = (await dataTemp).data;

  // Log project data to the console

  console.log(projectData);

 const projectSnippet= projectData.map((proj)=>{
  return <Link
   key={proj.projectId} 
  href={`/projects/${proj.projectId}`} 
  className = "flex justify-between items-center p-2 border rounded">
    <div className="flex items-center">
    <LetterBox letter={proj.projectName[0]}/>
    <span className="ml-2">{proj.projectName}</span>
    </div>
    <div>View Files</div>
  </Link>
 })

  // Render the component

  return (

    <div>

      {/* Display heading */}
<div className="flex m-2 justify-between items-center ">
      
    </div>
    
    <div className="flex flex-col gap-2 mt-24 ml-20 mr-20">
    <h1 className="font bold">Projects ({projectData.length})</h1>
    <hr/>
      {projectSnippet}
    </div>
    </div>
  );

}

 

/* Place the project folders here */

 

 

