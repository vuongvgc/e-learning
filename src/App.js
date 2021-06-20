import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Layout
import MainLayout from "./layouts/Main";
import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";
import UserLayout from "./layouts/User";

//Page
import HomePage from "./pages/HomePage";
import CourseDetail from "./pages/CourseDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Auth/Login";
import SignIn from "./pages/Auth/SignIn";
import AdminCourses from "./pages/Admin/AdminCourses";
import AdminUsers from "./pages/Admin/AdminUsers";
import UserInfor from "./pages/User/UserInfor";
import UserCourses from "./pages/User/UserCourses";
import "./styles/main.scss";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/course/:courseID", "/cart"]}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/course/:courseID" component={CourseDetail} />
              <Route path="/cart" component={ShoppingCart} />
            </Switch>
          </MainLayout>
        </Route>
        <Route exact path={["/login", "/signin"]}>
          <AuthLayout>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </AuthLayout>
        </Route>
        <Route exact path={["/user", "/user/courses"]}>
          <UserLayout>
            <Route exact path="/user" component={UserInfor} />
            <Route path="/user/courses" component={UserCourses} />
          </UserLayout>
        </Route>
        <Route exact path={["/admin", "/admin/users", "/admin/courses"]}>
          <AdminLayout>
            <Switch>
              <Route exact path="/admin" component={AdminUsers} />
              <Route path="/admin/users" component={AdminUsers} />
              <Route path="/admin/courses" component={AdminCourses} />
              <Route />
            </Switch>
          </AdminLayout>
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
