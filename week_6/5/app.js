
import React from 'react';
import './App.css';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h2>Cohorts Details</h2>

      <CohortDetails
        name="INTADMDF10 - .NET FSD"
        startDate="10-Sep-2021"
        coach="Karthik"
        trainer="Priya"
        status="Ongoing"
      />

      <CohortDetails
        name="ADM21JF014 - Java FSD"
        startDate="15-Sep-2021"
        coach="Ravi"
        status="Completed"
      />

      <CohortDetails
        name="CDBJF21025 - Java FSD"
        startDate="18-Sep-2021"
        coach="Aathima"
        status="Ongoing"
      />
    </div>
  );
}

export default App;
