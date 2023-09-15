// import DropUpload from "./components/DropUpload.tsx";
import React, {useState} from "react";
import {DropUpload} from "what-tools-react-drop-upload"


function App() {
    // 声明存储上传文件的变量
    const [fileData,setFileData] = useState(null)
    React.useEffect(()=> {
        console.log(fileData)
    },[fileData])
    return (
        <div>
            <DropUpload setFileData={setFileData}>
                <div>upload File</div>
            </DropUpload>
        </div>
    );
}

export default App;
