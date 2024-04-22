import React from 'react';
import './Receipt.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from '../../Components/footer/Footer.jsx';
import { useSelector } from 'react-redux';

const Receipt = () => {
  // Retrieve the total amount from the Redux store
  const totalAmount = useSelector(state => state.cart.totalAmount);
  console.log("Total Amount:", totalAmount); 

  const handleDownloadReceipt = () => {
    // Get the current date and time
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Create the receipt content with the current date and time
    const receiptContent = `DATE: ${currentDate}
    TIME: ${currentTime}
    TRANSACTION TYPE: debit
    AMOUNT PAID: ${totalAmount}`;

    // Create a blob with the receipt content
    const blob = new Blob([receiptContent], { type: 'text/plain' });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary link to trigger the download
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.setAttribute('download', 'payment_receipt.txt');
    tempLink.click();

    // Revoke the URL object to release resources
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <NavBar />
      <div className='receipt'>
        <p className='payR'>Payment Receipt</p>
        <div className='payRe'>
          <div className='receiptOne'>
            <p>Thank you</p>
            <p>Your transaction was successful</p>
          </div>
          <div>
            <div className='receiptTWo'>
              <p>DATE</p>
              <p>{new Date().toLocaleDateString()}</p> {/* Display current date */}
            </div>
            <div className='receiptTWo'>
              <p>TIME</p>
              <p>{new Date().toLocaleTimeString()}</p> {/* Display current time */}
            </div>
            <div className='receiptTWo'>
              <p>TRANSACTION TYPE</p>
              <p>debit</p>
            </div>
            <div className='receiptTWo'>
              <p>AMOUNT PAID</p>
              <p>N{totalAmount}</p> 
            </div>
            <button onClick={handleDownloadReceipt}>Download receipt</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Receipt;
