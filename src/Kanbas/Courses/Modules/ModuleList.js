import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input className="form-control" value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea className="form-control" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <span>
          <button className="btn btn-primary"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add Module</button>
        </span>

      </li>
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
              <button className="btn btn-success"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>

              <button className="btn btn-danger float-right"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </li>))
      }
    </ul >
  );
}
export default ModuleList;