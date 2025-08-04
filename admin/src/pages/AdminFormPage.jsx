// src/pages/AdminFormPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ReusableForm from "../components/ReusableForm";
import { adminForms } from "../config/adminFormsConfig";

const AdminFormPage = () => {
  const location = useLocation();
  const formConfig = adminForms.find((form) => form.path === location.pathname);

  if (!formConfig) return <p className="p-4">Invalid page</p>;

  return (
    <ReusableForm
      title={formConfig.title}
      endpoint={formConfig.endpoint}
    />
  );
};

export default AdminFormPage;
