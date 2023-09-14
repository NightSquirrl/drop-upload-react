import React, {ReactNode, useEffect, useRef} from "react";

type DropUploadProps = {
    children?: ReactNode;
    style?: React.CSSProperties;
    setFileData: React.Dispatch<React.SetStateAction<any>>
};
function DropUpload(props:DropUploadProps) {
    const dropTarget = useRef(null)
    const inputTarget = useRef(null)
    useEffect(()=> {
        (dropTarget.current as unknown as HTMLElement).ondragenter = e=> {
            e.preventDefault()
        }
        (dropTarget.current as unknown as HTMLElement).ondragover = e=> {
            e.preventDefault()

        }
        (dropTarget.current as unknown as HTMLElement).ondrop = e=> {
            e.preventDefault()
            if(!e.dataTransfer?.types.includes("Files")) {
                return
            }
            props.setFileData( e.dataTransfer!.files)
        }
    },[])
    return (
        <div onClick={()=> {
            (inputTarget.current as unknown as HTMLElement).click()
        }} ref={dropTarget} style={{...props.style,cursor:"pointer"}}>
            <input ref={inputTarget} type="file" style={{
                display:'none'
            }}/>
            {props.children}
        </div>
    );
}

export default DropUpload;
