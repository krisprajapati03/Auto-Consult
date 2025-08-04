import React, { useState, useEffect } from 'react';
import { FaRupeeSign, FaPercentage, FaCalendarAlt } from 'react-icons/fa';

const LoanCalculator = () => {
  const [price, setPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setPeriod] = useState('');
  const [downPayment, setDownPayment] = useState('');

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [price, interestRate, period, downPayment]);

  const calculateLoan = () => {
    const priceNum = parseFloat(price) || 0;
    const interestRateNum = parseFloat(interestRate) || 0;
    const periodNum = parseFloat(period) || 0;
    const downPaymentNum = parseFloat(downPayment) || 0;

    // Reset results if period > 999
    if (periodNum > 999) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayments(0);
      return;
    }

    const principal = priceNum - downPaymentNum;
    const monthlyRate = interestRateNum / 100 / 12;

    if (principal <= 0 || monthlyRate <= 0 || periodNum <= 0) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayments(0);
      return;
    }

    // Loan formula
    const monthlyPaymentCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, periodNum)) /
      (Math.pow(1 + monthlyRate, periodNum) - 1);

    const totalPaymentsCalc = monthlyPaymentCalc * periodNum;
    const totalInterestCalc = totalPaymentsCalc - principal;

    setMonthlyPayment(monthlyPaymentCalc);
    setTotalInterest(totalInterestCalc);
    setTotalPayments(totalPaymentsCalc + downPaymentNum);
  };

  const formatNumber = (amount) => {
    if (amount <= 0) return '-';
    return amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="bg-lightGray px-4 py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-darkBlack mb-6">Loan Calculator</h1>
          <p className="text-lightBlack max-w-3xl mx-auto text-lg leading-relaxed">
            Use our loan calculator to calculate payments over the life of your loan. Enter your information 
            to see how much your monthly payments could be. You can adjust length of loan, down 
            payment and interest rate to see how those changes raise or lower your payments.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <InputField
            label="Price"
            value={price}
            onChange={setPrice}
            icon={<FaRupeeSign className="text-blazeOrange text-lg" />}
            placeholder="Enter price"
            required
          />
          <InputField
            label="Interest Rate"
            value={interestRate}
            onChange={setInterestRate}
            iconRight={<FaPercentage className="text-blazeOrange text-lg" />}
            placeholder="Enter rate"
            required
            step="0.01"
          />
          <InputField
            label="Period (months)"
            value={period}
            onChange={(val) => {
              if (val.length <= 3) setPeriod(val); // restrict to 3 digits
            }}
            icon={<FaCalendarAlt className="text-blazeOrange text-lg" />}
            placeholder="Enter months"
            required
          />
          <InputField
            label="Down Payment"
            value={downPayment}
            onChange={setDownPayment}
            icon={<FaRupeeSign className="text-blazeOrange text-lg" />}
            placeholder="Enter down payment"
          />
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg border-2 border-blazeOrange p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResultBox title="Monthly Payment" value={formatNumber(monthlyPayment)} />
            <ResultBox title="Total Interest" value={formatNumber(totalInterest)} />
            <ResultBox title="Total Payments" value={formatNumber(totalPayments)} />
          </div>
        </div>

        <p className="text-center text-sm text-errorRed max-w-3xl mx-auto leading-relaxed">
          Title and other fees and incentives are not included in this calculation, which is an estimate only. 
          Monthly payment estimates are for informational purposes and do not represent a financing offer from 
          the seller of this vehicle. Other taxes may apply.
        </p>
      </div>
    </div>
  );
};

/* Reusable Components */
const InputField = ({ label, value, onChange, icon, iconRight, placeholder, step, required }) => (
  <div className="space-y-3">
    <label className="block text-darkBlack font-medium text-lg">
      {label} {required && <span className="text-errorRed">*</span>}
    </label>
    <div className="relative">
      {icon && <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">{icon}</div>}
      <input
        type="number"
        step={step || "1"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={3} // visually restrict, actual restrict handled in onChange
        className={`w-full ${icon ? "pl-12" : "pl-4"} ${iconRight ? "pr-12" : "pr-4"} py-4 text-lg border-2 border-darkGray rounded-lg focus:border-blazeOrange focus:outline-none transition-colors bg-white text-darkBlack`}
        placeholder={placeholder}
      />
      {iconRight && <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">{iconRight}</div>}
    </div>
  </div>
);

const ResultBox = ({ title, value }) => (
  <div className="text-center">
    <h3 className="text-lg font-semibold text-lightBlack mb-4">{title}</h3>
    <div className="text-3xl font-bold text-darkBlack flex items-center justify-center gap-2">
      <FaRupeeSign className="text-blazeOrange" />
      {value}
    </div>
  </div>
);

export default LoanCalculator;
