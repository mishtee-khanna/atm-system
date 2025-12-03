import React, { useState } from "react";
import {
  CreditCard,
  Eye,
  DollarSign,
  ArrowDownCircle,
  ArrowUpCircle,
  LogOut,
  Lock,
} from "lucide-react";

const ATMSystem = () => {
  const [balance, setBalance] = useState(1000);
  const [screen, setScreen] = useState("menu"); // menu, withdraw, deposit, balance, pin
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success, error
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPin = "1234";

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      setIsAuthenticated(true);
      setScreen("menu");
      setMessage("");
      setPin("");
    } else {
      setMessage("Incorrect PIN. Please try again.");
      setMessageType("error");
      setPin("");
    }
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);

    if (!amount || isNaN(withdrawAmount)) {
      setMessage("Please enter a valid amount");
      setMessageType("error");
      return;
    }

    if (withdrawAmount <= 0) {
      setMessage("Invalid withdrawal amount!");
      setMessageType("error");
      return;
    }

    if (withdrawAmount > balance) {
      setMessage("Insufficient balance!");
      setMessageType("error");
      return;
    }

    setBalance(balance - withdrawAmount);
    setMessage(`Withdrawal successful! $${withdrawAmount.toFixed(2)} withdrawn.`);
    setMessageType("success");
    setAmount("");
    setTimeout(() => {
      setScreen("menu");
      setMessage("");
    }, 2000);
  };

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);

    if (!amount || isNaN(depositAmount)) {
      setMessage("Please enter a valid amount");
      setMessageType("error");
      return;
    }

    if (depositAmount <= 0) {
      setMessage("Invalid deposit amount!");
      setMessageType("error");
      return;
    }

    setBalance(balance + depositAmount);
    setMessage(`Deposit successful! $${depositAmount.toFixed(2)} deposited.`);
    setMessageType("success");
    setAmount("");
    setTimeout(() => {
      setScreen("menu");
      setMessage("");
    }, 2000);
  };

  const handleQuickAmount = (value) => {
    setAmount(value.toString());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setScreen("pin");
    setBalance(1000);
    setAmount("");
    setMessage("");
    setPin("");
  };

  const handleBack = () => {
    setScreen("menu");
    setAmount("");
    setMessage("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-md border-4 border-gray-700">
          <div className="text-center mb-8">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={40} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">PIN-ATM</h1>
            <p className="text-gray-400">Enter your PIN to continue</p>
          </div>

          <div className="mb-6">
            <input
              type="password"
              maxLength="4"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
              placeholder="Enter 4-digit PIN"
              className="w-full px-4 py-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-white text-center text-2xl tracking-widest focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 text-center mt-2">
              Hint: PIN is 1234
            </p>
          </div>

          {message && (
            <div className="mb-4 p-3 bg-red-900 border border-red-700 rounded-lg text-red-200 text-sm text-center">
              {message}
            </div>
          )}

          <button
            onClick={handlePinSubmit}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-md border-4 border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <CreditCard className="text-blue-400" size={32} />
            <h1 className="text-2xl font-bold text-white">PIN-ATM</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white transition"
            title="Logout"
          >
            <LogOut size={24} />
          </button>
        </div>

        {/* Screen */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 mb-6 min-h-[300px] border-2 border-gray-700">
          {screen === "menu" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6 text-center">
                Welcome! Select an option
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => setScreen("balance")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-3"
                >
                  <Eye size={20} />
                  View Balance
                </button>
                <button
                  onClick={() => setScreen("withdraw")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-3"
                >
                  <ArrowDownCircle size={20} />
                  Withdraw Money
                </button>
                <button
                  onClick={() => setScreen("deposit")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-3"
                >
                  <ArrowUpCircle size={20} />
                  Deposit Money
                </button>
              </div>
            </div>
          )}

          {screen === "balance" && (
            <div className="text-center">
              <DollarSign className="text-green-400 mx-auto mb-4" size={48} />
              <h2 className="text-lg font-semibold text-gray-400 mb-2">
                Current Balance
              </h2>
              <div className="text-5xl font-bold text-white mb-8">
                ${balance.toFixed(2)}
              </div>
              <button
                onClick={handleBack}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Back to Menu
              </button>
            </div>
          )}

          {screen === "withdraw" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 text-center">
                Withdraw Money
              </h2>
              <p className="text-gray-400 text-sm mb-4 text-center">
                Available Balance: ${balance.toFixed(2)}
              </p>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white text-lg mb-4 focus:outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[20, 50, 100, 200, 500, 1000].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleQuickAmount(value)}
                    className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-semibold transition"
                  >
                    ${value}
                  </button>
                ))}
              </div>

              {message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    messageType === "success"
                      ? "bg-green-900 border border-green-700 text-green-200"
                      : "bg-red-900 border border-red-700 text-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleWithdraw}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Withdraw
                </button>
              </div>
            </div>
          )}

          {screen === "deposit" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 text-center">
                Deposit Money
              </h2>
              <p className="text-gray-400 text-sm mb-4 text-center">
                Current Balance: ${balance.toFixed(2)}
              </p>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white text-lg mb-4 focus:outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[20, 50, 100, 200, 500, 1000].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleQuickAmount(value)}
                    className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-semibold transition"
                  >
                    ${value}
                  </button>
                ))}
              </div>

              {message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    messageType === "success"
                      ? "bg-green-900 border border-green-700 text-green-200"
                      : "bg-red-900 border border-red-700 text-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeposit}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Deposit
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center text-gray-500 text-xs">
          <p>Secure Transaction • 24/7 Service</p>
        </div>
      </div>
    </div>
  );
};

export default ATMSystem;
