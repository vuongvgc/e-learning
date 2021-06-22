import { combineReducers } from "redux";
import adminCoursesReducer from "./adminCoursesReducer";
import adminUsersReducer from "./adminUsersReducer";
import authReducer from "./authReducers";
import coursesReducer from "./coursesReducer";
import studentsReducers from "./studentsReducer";
import userReducer from "./userReducer";
const rootReducers = combineReducers({
  courses: coursesReducer,
  students: studentsReducers,
  userInformation: userReducer,
  adminUsers: adminUsersReducer,
  adminCourses: adminCoursesReducer,
  auth: authReducer,
});
export default rootReducers;
