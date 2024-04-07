import React from 'react';
import PatientsTable from './PatientsTable.js';
import './css/normalize.css';
import './css/style.css';


const App = () => {
  return (
    <div>
      <header>
        <h1>Patient Management</h1>
        {/* Navigation and other header content */}
      </header>
      <main>
        <section className="patients-list">
          <PatientsTable />
        </section>
        {/* Form for adding patients would go here */}
      </main>
      <footer>
        <p>&copy; 2023 Amazing Patient Management System</p>
      </footer>
    </div>
  );
};

export default App;
