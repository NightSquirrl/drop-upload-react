import React, { ReactNode } from "react";
type DropUploadProps = {
    children?: ReactNode;
    style?: React.CSSProperties;
    setFileData: React.Dispatch<React.SetStateAction<any>>;
};
declare function DropUpload(props: DropUploadProps): import("react/jsx-runtime").JSX.Element;
export default DropUpload;
