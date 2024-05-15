'use server';

export async function ShowSelectedFiles(formData:FormData){
    const checkBoxes = Array.from(formData.entries());
    console.log(checkBoxes);
    } 
    