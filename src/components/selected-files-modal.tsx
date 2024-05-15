export default function SelectFilesModal(props: SelectFilesProps){
    return(
        props.selected.map(file =>
            
                <p>{file}</p>
            
        )
    )

}
interface SelectFilesProps{
    selected: string[];

}