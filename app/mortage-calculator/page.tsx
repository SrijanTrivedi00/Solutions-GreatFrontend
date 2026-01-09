"use client";
import { ToggleLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Mortagecalc = () => {
  const [data, setData] = useState({
    P: 0,
    R: 0,
    N: 0,
  });
  const [monthlypayment, setMonthlypayment] = useState(0);
  const calcData = () => {
    data.R > 0 && data.P > 0 && data.N > 0
      ? setMonthlypayment(
          (data.P * data.R) / 100 / (1 - Math.pow(1 + data.R / 100, -data.N))
        )
      : setMonthlypayment(0);
  };

  useEffect(() => {
    calcData();
  }, [data]);

  return (
    <div>
      <div className="flex justify-between mt-5">
        <div>
          <h1 className="text-4xl text-black">Mortage calculator</h1>
          <span>United States</span>
        </div>
        <div className="flex justify-end">
          {["Overview", "Rates", "calculator"].map((item) => (
            <span className="text-black rounded-4xl text-4xl bg-amber-300 px-3 py-3 mx-3">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-gray-700 w-full mt-5"></div>

      <div>
        <h3 className="text-black text-2xl">Calculator</h3>
      </div>
      <div className="my-2.5">
        <span className="text-black bg-gray-200 px-3 py-2 rounded-lg">
          Monthly Payment
        </span>
        <span className="text-black bg-gray-200 px-3 py-2 rounded-lg">
          Purchase Budget
        </span>
      </div>
      <div className="flex">
        <ToggleLeftIcon />
        <span className="text-black px-3  rounded-lg mx-3">
          Include Taxes and Insurance
        </span>
      </div>
      <div className="flex">
        <div>
          <div className="">
            <label className="text-black">Loan Amount</label>
            <input
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              type="number"
              placeholder="Enter purchase budget"
              onChange={(e) =>
                setData({ ...data, P: parseFloat(e.target.value) })
              }
            />
          </div>
          <div className="flex">
            <div className="mr-4">
              <label className="text-black">Loan Term</label>
              <input
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                type="number"
                placeholder="Enter purchase budget"
                onChange={(e) =>
                  setData({ ...data, N: parseFloat(e.target.value) })
                }
              />
            </div>
            <div className="mr-4">
              <label className="text-black">Interest Rate</label>
              <input
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                type="number"
                placeholder="Enter purchase budget"
                onChange={(e) =>
                  setData({ ...data, R: parseFloat(e.target.value) })
                }
              />
            </div>
          </div>
        </div>
        <span className="text-black">
          Monthly payment
          <h3>{monthlypayment}</h3>
        </span>
      </div>
    </div>
  );
};
export default Mortagecalc;
