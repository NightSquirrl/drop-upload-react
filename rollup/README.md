# Use Demo
```javascript
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
```
## 参数
```typescript
type DropUploadProps = {
    children?: ReactNode;
    style?: React.CSSProperties;
    setFileData: React.Dispatch<React.SetStateAction<any>>
};
```


