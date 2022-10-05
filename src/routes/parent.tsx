import AuthorizedResult from "pages/result/student";
import UnAuthorizedResult from "pages/parent-result/student";
import LandingPage from "pages";
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import ErrorPage from "pages/404";
import Dashboard from "Parent/pages/";
import Test from "Parent/pages/test";
import Bill from "Parent/pages/bill";
import Payment from "Parent/pages/payment";
import Courses from "Parent/pages/courses";
import Result from "Parent/pages/result";
// const pref = "pref"
// where :id refers to child's ID and :slug refers to the schools slug 
const pref = ""
export const Parent = (
  <Switch>
    <Route path={`${pref}/`} component={Dashboard} exact />
    <Route path={`${pref}/courses`} component={Courses} exact />
    <Route path={`${pref}/result`} component={Result} exact />
    <Route path={`${pref}/bill`} component={Bill} exact />
    <Route path={`${pref}/payment`} component={Payment} exact />
    <Route path={`${pref}/test`} component={Test} exact />
    <Route
      // path="*"
      // component={ErrorPage}
      render={(props)=>(
        <ErrorPage {...props} />
      )}
    />
  </Switch>
);