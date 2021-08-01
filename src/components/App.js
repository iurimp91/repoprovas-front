import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResetCSS } from "../styles/ResetCSS.js";
import ExamForm from "./form/ExamForm.js";
import Header from "./Header.js";
import Homepage from "./Homepage.js";
import TeachersPage from "./teachers/TeachersPage.js";
import TeacherExamsPage from "./teachers/TeacherExamsPage.js";
import SubjectsPage from "./subjects/SubjectsPage.js";
import ExamPage from "./ExamPage.js";

function App() {
  return (
    <BrowserRouter>
    <ResetCSS />
    <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/exam-form">
          <ExamForm />
        </Route>
        <Route exact path="/teachers">
          <TeachersPage />
        </Route>
        <Route exact path="/teachers/:id">
          <TeacherExamsPage />
        </Route>
        <Route exact path="/subjects">
          <SubjectsPage />
        </Route>
        <Route exact path="/exam/:id">
          <ExamPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;