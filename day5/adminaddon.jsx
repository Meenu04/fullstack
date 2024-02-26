import  { useState } from 'react';
import '../../assets/css/adminaddon.css'; // Make sure to adjust the path based on your project structure
import AdminNavbar from './adminnavbar';

function Form() {
  const [planType, setPlanType] = useState('');
  const [data, setData] = useState('');
  const [calls, setCalls] = useState('');
  const [validity, setValidity] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the form data to an API or perform any other action
    console.log('Form submitted:', { planType, data, calls, validity, cost });
  };

  return (
    <div className="form-container">
        <div>
            <AdminNavbar/>
        </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="planType">Plan Type</label>
        <input style={{border:'1px solid black'}}
          type="text"
          id="planType"
          value={planType}
          onChange={(e) => setPlanType(e.target.value)}
        />

        <label htmlFor="data">Data</label>
        <input style={{border:'1px solid black'}}
          type="text"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label htmlFor="calls">Calls</label>
        <input style={{border:'1px solid black'}}
          type="text"
          id="calls"
          value={calls}
          onChange={(e) => setCalls(e.target.value)}
        />

        <label htmlFor="validity">Validity</label>
        <input style={{border:'1px solid black'}}
          type="text"
          id="validity"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />

        <label htmlFor="cost">Cost</label>
        <input style={{border:'1px solid black'}}
          type="text"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
