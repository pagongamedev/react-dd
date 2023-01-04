add back button
button i18n

use param
   <Route path="assessment">
            <Route index element={<P300Assessment.JSX />} />
            <Route path="quiz">
              <Route index element={<Navigate replace to=".." />} />
              <Route path=":assessmentID" element={<P310AssessmentQuiz.JSX />} />
            </Route>
          </Route>
          <Route path="result">
            <Route index element={<P400Result.JSX />} />
            <Route path="detail">
              <Route index element={<Navigate replace to=".." />} />
              <Route path=":resultID" element={<P410ResultDetail.JSX />} />
              

dark Module

