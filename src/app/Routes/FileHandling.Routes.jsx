import Cloudinary from "../../content/backend/9-file-handling/Cloudinary";
import FileCompression from "../../content/backend/9-file-handling/FileCompression";
import FileValidation from "../../content/backend/9-file-handling/FileValidation";
import ImageKit from "../../content/backend/9-file-handling/ImageKit";
import Multer from "../../content/backend/9-file-handling/Multer";
import MultipartFormData from "../../content/backend/9-file-handling/MultipartFormData";
import NodejsFileSystem from "../../content/backend/9-file-handling/NodejsFileSystem";
import PresignedURLs from "../../content/backend/9-file-handling/PresignedURLs";
import StreamingFiles from "../../content/backend/9-file-handling/StreamingFiles";

export const FileHandlingRoutes = [
  {
    path: "/cloudinary",
    element: <Cloudinary />,
    label: "Cloudinary",
  },
  {
    path: "/file-compression",
    element: <FileCompression />,
    label: "File Compression",
  },
  {
    path: "/file-validation",
    element: <FileValidation />,
    label: "File Validation",
  },
  {
    path: "/imagekit",
    element: <ImageKit />,
    label: "ImageKit",
  },
  {
    path: "/multer",
    element: <Multer />,
    label: "Multer",
  },
  {
    path: "/multipart-form-data",
    element: <MultipartFormData />,
    label: "Multipart Form Data",
  },
  {
    path: "/nodejs-file-system",
    element: <NodejsFileSystem />,
    label: "Node.js File System",
  },
  {
    path: "/presigned-urls",
    element: <PresignedURLs />,
    label: "Presigned URLs",
  },
  {
    path: "/streaming-files",
    element: <StreamingFiles />,
    label: "Streaming Files",
  },
];
