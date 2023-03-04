import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateIssue } from "./issueSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Form/FormikControl";

const assignedToOptions = [
  { key: "Select An Option", value: "" },
  { key: "Rahim", value: "rahim" },
  { key: "Karim", value: "karim" },
  { key: "Zahid", value: "Zahid" },
];
const priorityOptions = [
  { key: "Low", value: "low" },
  { key: "Medium", value: "medium" },
  { key: "High", value: "high" },
];

const EditIssue = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const numOfIssue = useSelector((state) => state.issuesReducer.length);

  const initialValues = {
    title: location.state.title,
    description: location.state.description,
    assignedTo: location.state.assignedTo,
    priority: location.state.priority,
    id: location.state.id,
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    assignedTo: Yup.string().required("This field is required"),
    priority: Yup.string().required("This field is required"),
  });
  const onSubmit = (values) => {
    dispatch(updateIssue({ ...values }));
    navigate("/issues");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <>
            <h2 className="text-center text-3xl p-4">Add Issue</h2>
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px]">
                <Form>
                  {/* input field */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title"
                    name="title"
                  />
                  {/* textarea field */}
                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="description"
                  />
                  {/* select field */}
                  <FormikControl
                    control="select"
                    name="assignedTo"
                    label="Assigned To"
                    options={assignedToOptions}
                  />
                  {/* radio field */}
                  <FormikControl
                    control="radio"
                    name="priority"
                    label="Priority"
                    options={priorityOptions}
                  />
                  <button
                    type="submit"
                    className="border-gray-700 bg-slate-300 hover:bg-slate-500 hover:text-white px-4 py-2 outline-none rounded-sm shadow-md "
                  >
                    Update Issue
                  </button>
                </Form>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default EditIssue;
