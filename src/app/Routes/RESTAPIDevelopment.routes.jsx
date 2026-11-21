import APIDocumentation from "../../content/backend/05-express/RESTAPIDevelopment/APIDocumentation";
import CRUDOperations from "../../content/backend/05-express/RESTAPIDevelopment/CRUDOperations";
import FieldSelection from "../../content/backend/05-express/RESTAPIDevelopment/FieldSelection";
import FileUpload from "../../content/backend/05-express/RESTAPIDevelopment/FileUpload";
import Filtering from "../../content/backend/05-express/RESTAPIDevelopment/Filtering";
import InputValidation from "../../content/backend/05-express/RESTAPIDevelopment/InputValidation";
import Pagination from "../../content/backend/05-express/RESTAPIDevelopment/Pagination";
import RESTAPIDesign from "../../content/backend/05-express/RESTAPIDevelopment/RESTAPIDesign";
import RequestValidation from "../../content/backend/05-express/RESTAPIDevelopment/RequestValidation";
import ResponseStructure from "../../content/backend/05-express/RESTAPIDevelopment/ResponseStructure";
import Searching from "../../content/backend/05-express/RESTAPIDevelopment/Searching";
import Sorting from "../../content/backend/05-express/RESTAPIDevelopment/Sorting";
import Webhooks from "../../content/backend/05-express/RESTAPIDevelopment/Webhooks";

export const RESTAPIDevelopmentRoutes = [
  {
    path: "/api-documentation",
    element: <APIDocumentation />,
    label: "API Documentation",
  },
  {
    path: "/crud-operations",
    element: <CRUDOperations />,
    label: "CRUD Operations",
  },
  {
    path: "/field-selection",
    element: <FieldSelection />,
    label: "Field Selection",
  },
  {
    path: "/file-upload",
    element: <FileUpload />,
    label: "File Upload",
  },
  {
    path: "/filtering",
    element: <Filtering />,
    label: "Filtering",
  },
  {
    path: "/input-validation",
    element: <InputValidation />,
    label: "Input Validation",
  },
  {
    path: "/pagination",
    element: <Pagination />,
    label: "Pagination",
  },
  {
    path: "/rest-api-design",
    element: <RESTAPIDesign />,
    label: "REST API Design",
  },
  {
    path: "/request-validation",
    element: <RequestValidation />,
    label: "Request Validation",
  },
  {
    path: "/response-structure",
    element: <ResponseStructure />,
    label: "Response Structure",
  },
  {
    path: "/searching",
    element: <Searching />,
    label: "Searching",
  },
  {
    path: "/sorting",
    element: <Sorting />,
    label: "Sorting",
  },
  {
    path: "/webhooks",
    element: <Webhooks />,
    label: "Webhooks",
  },
];
