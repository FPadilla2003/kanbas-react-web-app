import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { React, useState, useEffect } from "react";
import * as client from "../Courses/client";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const updateCourse = async () => {
    try {
      const status = await client.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={updateCourse}>Update</button>

      <button onClick={addCourse}>Add</button>
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <div className="list-group">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>

            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
