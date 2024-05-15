


import Image from "next/image";

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

 

  // Render the component

  return (

    <div>

      {/* Display heading */}

      <div>Projects Page!, PROJECT FOLDERS BELONG HERE</div>

      {/* Render a table to display project data */}

      <table className="table-auto">

        <thead>

          <tr>

            <th>Project ID</th>

            <th>Project Name</th>

          </tr>

        </thead>

        <tbody>

          {/* Map through projectData array and render a row for each project */}

          {projectData.map(project => (

            <tr key={project.projectId}>

              <td>{project.projectId}</td>

              <Link href={`/projects/${project.projectId}`}>  
                <td>{project.projectName}</td>
              </Link>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

 

/* Place the project folders here */

 

 

