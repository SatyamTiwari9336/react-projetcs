import { useState } from "react";
import InputBox from "./Components/Inputbox";
import BackgroundImage from "./finance.jpg";
import useCurrencyInfo from "./hooks/Usecurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [ConvertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);
  const options = Object.keys(currencyinfo);
  const swap = () => {
    setfrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(ConvertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-screen min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(amount) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ConvertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectcurrency={from}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
