import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addIssue } from "./issueSlice";
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

const AddIssue = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numOfIssue = useSelector((state) => state.issuesReducer.length);

  const initialValues = {
    title: "",
    description: "",
    assignedTo: "",
    priority: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    assignedTo: Yup.string().required("This field is required"),
    priority: Yup.string().required("This field is required"),
  });
  const onSubmit = (values) => {
    dispatch(addIssue({ id: numOfIssue + 1, ...values }));
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
                    Submit Issue
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

export default AddIssue;
