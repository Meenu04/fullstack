import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import '../../assets/css/adminplan.css';

function Form() {
  const [planType, setPlanType] = useState('');
  const [data, setData] = useState('');
  const [calls, setCalls] = useState('');
  const [validity, setValidity] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the form data to an API, or perform any other action
  };

  return (
    <BrowserRouter> {/* Wrap your component with BrowserRouter */}
      <div>
        <div id="background-image">
          <div id="whole-form">
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="planType" id="label">Plan Type</label>
                <input
                  type="text"
                  id="planType"
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                />

                <label htmlFor="data" id="label">Data</label>
                <input
                  type="text"
                  id="datae"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />

                <label htmlFor="calls" id="label">Calls</label>
                <input
                  type="text"
                  id="calls"
                  value={calls}
                  onChange={(e) => setCalls(e.target.value)}
                />

                <label htmlFor="validity" id="label">Validity</label>
                <input
                  type="text"
                  id="validity"
                  value={validity}
                  onChange={(e) => setValidity(e.target.value)}
                />

                <label htmlFor="cost" id="label">Cost</label>
                <input
                  type="text"
                  id="cost"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />

                <button type="submit" id="add-but">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default Form;
