
import "../../assets/css/rechargehis.css"; // Make sure to create and import your CSS file
import AdminNavbar from "./adminnavbar";

const PaymentTable = () => {
  const paymentData = [
    { userid: '001', paymentid: 'P001', date: '2022-03-01', amount: 100, mode: 'Credit Card', status: 'Success' },
    { userid: '002', paymentid: 'P002', date: '2022-03-02', amount: 50, mode: 'PayPal', status: 'Failed' },
    { userid: '003', paymentid: 'P003', date: '2022-03-03', amount: 75, mode: 'Bank Transfer', status: 'Pending' },
    { userid: '004', paymentid: 'P004', date: '2022-03-04', amount: 120, mode: 'Debit Card', status: 'Success' },
  { userid: '005', paymentid: 'P005', date: '2022-03-05', amount: 90, mode: 'Cash', status: 'Failed' },
  { userid: '006', paymentid: 'P006', date: '2022-03-06', amount: 60, mode: 'UPI', status: 'Success' },
  { userid: '007', paymentid: 'P007', date: '2022-03-07', amount: 30, mode: 'Cheque', status: 'Pending' },
  { userid: '008', paymentid: 'P008', date: '2022-03-08', amount: 80, mode: 'Google Pay', status: 'Success' },
  { userid: '009', paymentid: 'P009', date: '2022-03-09', amount: 110, mode: 'Apple Pay', status: 'Failed' },
  { userid: '010', paymentid: 'P010', date: '2022-03-10', amount: 95, mode: 'Online Banking', status: 'Pending' },
  ];

  return (
    <div className="table-container">
      <div>
        <AdminNavbar/>
      </div>
      <table className="payment-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Payment ID</th>
            <th>Date</th>
            <th>Amount Paid</th>
            <th>Mode of Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment, index) => (
            <tr key={index}>
              <td>{payment.userid}</td>
              <td>{payment.paymentid}</td>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>{payment.mode}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
