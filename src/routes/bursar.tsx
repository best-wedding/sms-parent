import SchoolBirthdays from "pages/school/birthdays";
import SchoolCourses from "pages/school/courses";
import SchoolFees from "pages/school/fees";
import SMS from "pages/school/sms";
import SchoolStaffs from "pages/school/staffs";
import SchoolStudents from "pages/school/students";
import SchoolDashboard from "pages/school";
import SchoolClasses from "pages/school/classes";
import SingleClass from "pages/school/class/class";
import SingleCourse from "pages/school/course/course";
import SingleStaff from "pages/school/staff/index";
import TeacherCourses from "pages/school/staff/courses";
import EditStaff from "pages/school/staff/edit";
import SingleStudent from "pages/school/student/index";
import StudentCourses from "pages/school/student/courses";
import EditStudent from "pages/school/student/edit";
import BursarDashBoard from "Bursar/pages";
import BursarStudents from "Bursar/pages/students";
import BursarStudentHistory from "Bursar/pages/history";
import BursarPayments from "Bursar/pages/payments";
import LandingPage from "pages";
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import ErrorPage from "pages/404";

export const Bursar = (
  <Switch>
    {/* <Route path="/:slug/login" component={LoginPage} exact /> */}
    <Route path="/:slug/bursar" component={BursarDashBoard} exact />
    <Route path="/:slug/" component={BursarDashBoard} exact />
    <Route path="/:slug/bursar/students" component={BursarStudents} exact />
    <Route path="/:slug/bursar/history/:id" component={BursarStudentHistory} exact />
    <Route path="/:slug/bursar/payments" component={BursarPayments} exact />
    <Route path="/" component={LandingPage} exact />
    <Route
      // path="*"
      // component={ErrorPage}
      render={(props)=>(
        <ErrorPage {...props} />
      )}
    />
  </Switch>
);