import axios from 'axios';
import { Checkbox } from "@nextui-org/checkbox";
import Link from 'next/link';
import {ShowSelectedFiles} from '../actions'
import { useState} from 'react';
import SelectFilesModal from '@/components/selected-files-modal';

interface File {
    fileId: string;
    fileName: string;
    fileSize: number;
}

interface ShowProjectFilesProps {
    params: {
        projectId: string;
    };
}

export default async function ShowProjectFiles(props: ShowProjectFilesProps) {

    // Make GET request to the API endpoint
    const projectId = props.params.projectId;
    try {
        const response = await axios.get(`http://127.0.0.1:3001/api/files/byProjectId?id=${projectId}`);
        const files: File[] = response.data;


        return (
            <div className="flex gap-4">
                <form action={ShowSelectedFiles}>
                <ul>
                   
                    <h1>Project Files</h1>
                
                    {files.map((file: File) => (
                        <li key={file.fileId}>
                            <p className="flex items-center"> {/* Flex container for file name and checkbox */}
                                <span className="mr-2">{file.fileName}</span> {/* File Name */}

                                <input name={file.fileId}
                                 
                                type='checkbox'
                                defaultChecked
                                />

                               <span className='mr-2 text-sm'> select</span>
                            </p>
                            <p>FileID: {file.fileId}</p>
                            <p>File Size: {file.fileSize}</p>
                        </li>
                    ))}
                </ul>
                
    <button>
        Show Modal
    </button>
    </form>
{/* <SelectFilesModal selected= {checkedFileIds}>

</SelectFilesModal> */}
            </div>
        );
    } catch (error) {
        console.error('Error fetching project files', error);
        // Handle error
        return <div>Error fetching project files</div>;
    }
}
