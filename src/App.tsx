import DropUpload from "./components/DropUpload.tsx";
import React, {useState} from "react";
// import {DropUpload} from "drop-upload"


function App() {
    const [fileData,setFileData] = useState(null)
    React.useEffect(()=> {
        console.log(fileData)
    },[fileData])
    return (
        <div>
            <DropUpload setFileData={setFileData}>
                <div>上传文件</div>
            </DropUpload>
        </div>
    );
}

export default App;
