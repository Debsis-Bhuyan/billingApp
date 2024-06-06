import Feedback from "../models/feedbackModel.js";
import Help from "../models/helpModel.js";
import fs from "fs";
import pdf from "html-pdf";
import { sendInvoicePdf } from "../utils/sendMails.js";

export const feedbackForm = async (req, res) => {
  const { userId, fullName, email, message } = req.body;
  console.log(userId);
  try {
    const feedback = await Feedback.create({
      userId,
      fullName,
      email,
      message,
    });

    res.json({ message: "Feedback received successfully", feedback });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback" });
  }
};
export const helpForm = async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    const help = await Help.create({ fullName, email, message });

    res.json({ message: "Feedback received successfully", help });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback" });
  }
};
// app.post("/api/generate-invoice-pdf", (req, res) => {

export const sendInvoice = async (req, res) => {
  // Generate HTML content for invoice
  const {email} = req.body;
  const generateHTMLInvoice = () => {
    let html = `
      <div>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
          }
  
          .container {
            width: 90%;
            margin: auto;
            background-color: #fff;
            padding: 20px;
           }
  
          .header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
          }
  
          .header-left {
            text-align: left;
          }
  
          .business-name {
            font-size: 24px;
            font-weight: bold;
          }
  
          .phone-number {
            margin-top: 5px;
          }
  
          .header-right {
            display: flex;
            align-items: center;
          }
  
          .business-logo {
            width: 80px;
            height: auto;
            border-radius: 50%;
          }
  
          .title {
            text-align: center;
            color: #6b46c1;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 24px;
          }
  
          .order-details {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
  
          .from-to,
          .dates {
            width: 48%;
          }
  
          .order-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
  
          .order-table th,
          .order-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
          }
  
          .order-table th {
            background-color: #f2f2f2;
          }
  
          .text-right {
            text-align: right;
          }
  
          .summary {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
  
          .summary-left,
          .summary-right {
            width: 48%;
          }
  
          .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
          }
  
          .signature {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
          }
  
          .signature p {
            border-top: 1px solid #000;
            padding-top: 10px;
            text-align: center;
            width: 200px;
          }
  
          .print-button {
            text-align: center;
            margin-top: 20px;
          }
  
          .print-button button {
            padding: 10px 20px;
            background-color: #1a73e8;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
  
          .print-button button:hover {
            background-color: #0c5ab8;
          }
        </style>
        <div class="container">
          <header class="header">
            <div class="header-left">
              <h1 class="business-name">soft-tech</h1>
              <p class="phone-number">Phone Number: 4555455120</p>
            </div>
            <div class="header-right">
              <img src="logo.png" alt="Business Logo" class="business-logo" />
            </div>
          </header>
          <h2 class="title">Sale Order</h2>
          <div class="order-details">
            <div class="from-to">
              <p><strong>From:</strong> soft-tech</p>
              <p><strong>To:</strong> Debasis Bhuyan</p>
              <p><strong>Order Number:</strong> 33</p>
            </div>
            <div class="dates">
              <p><strong>Order Details</strong></p>
              <p><strong>Date:</strong> 6/6/2024</p>
              <p><strong>Due Date:</strong> 2024-06-06</p>
            </div>
          </div>
          <table class="order-table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Price/Unit (without tax)</th>
                <th>Tax</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Camera</td>
                <td>45</td>
                <td>number</td>
                <td>23000 Rs</td>
                <td>18</td>
                <td>1221300.00 Rs</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Car</td>
                <td>4</td>
                <td>number</td>
                <td>23000 Rs</td>
                <td>28</td>
                <td>117760.00 Rs</td>
              </tr>
              <tr>
                <td>3</td>
                <td>www</td>
                <td>2</td>
                <td>Numbers(m)</td>
                <td>10000 Rs</td>
                <td>IGST5%</td>
                <td>21000.00 Rs</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">Total quantity:</td>
                <td>51</td>
                <td colspan="3" class="text-right">Total Amount:</td>
                <td>1360060 Rs</td>
              </tr>
            </tfoot>
          </table>
          <div class="summary">
            <div class="summary-left">
              <p><strong>Order Amount In Words</strong></p>
              <p>Thirteen Lakh Sixty Thousand Sixty only</p>
              <p><strong>Terms and Conditions</strong></p>
              <p>Thanks for doing business with us!</p>
              <p>Please visit Again</p>
            </div>
            <div class="summary-right">
              <div class="summary-row">
                <p>Total</p>
                <p>1360060 Rs</p>
              </div>
              <div class="summary-row">
                <p>Paid</p>
                <p>1360060 Rs</p>
              </div>
              <div class="summary-row">
                <p>Balance</p>
                <p>1360060 Rs</p>
              </div>
            </div>
          </div>
          <div class="signature">
            <p>Authorized Signatory</p>
          </div>
           
        </div>
         
      </div>
      `;

    return html;
  };

  // Generate PDF invoice from HTML content
  const generatePDFInvoice =  (htmlContent) => {
    pdf.create(htmlContent).toFile("./billingData/invoice.pdf", (err) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to generate PDF" });
      }
      sendInvoicePdf(email,res)
      console.log("PDF invoice generated successfully");
      res.status(200).json({
        success: true,
        message: "PDF invoice generated successfully",
        invoiceFilePath: "invoice.pdf",
      });
    });
  };

  // Call functions to generate HTML content and PDF invoice
  const htmlContent = generateHTMLInvoice();
  generatePDFInvoice(htmlContent);
  setTimeout(() => {
    fs.unlink("./billingData/invoice.pdf", function (err) {
      if (err) return console.log(err);
      console.log("file deleted successfully");
    });
  }, 20000);
};
