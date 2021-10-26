import { useState, useEffect } from "react";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [custom, setCustom] = useState("");
  const [peopleNum, setPeopleNum] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    //remove check when adding custom value
    const tips = document.querySelectorAll(".calculator__tip");
    if (custom) {
      tips.forEach((e) => {
        e.checked = false;
      });
    }

    //calculate
    if (bill && tipPercent && peopleNum) {
      //x = percent / 100
      //y = x * bill
      //tipAmountPerPerson = y / number of people
      // const tipAmountPerPerson = ((newTipPercent / 100) * newBill) / peopleNum;
      const tipAmountPerPerson = ((tipPercent / 100) * bill) / peopleNum;
      const totalPerPerson = bill / peopleNum + tipAmountPerPerson;
      setTipAmount(tipAmountPerPerson.toFixed(2));
      setTotal(totalPerPerson.toFixed(2));
    }
  });

  //add error class
  const isError = (e) => {
    if (parseInt(e.target.value) === 0) {
      e.target.parentNode.classList.add("error");
    } else {
      e.target.parentNode.classList.remove("error");
    }
  };

  return (
    <section className="calculator">
      <form className="calculator__form">
        {/* bill */}
        <div className="calculator__bill-container">
          <label className="calculator__label" htmlFor="bill">
            Bill
          </label>
          <div className="calculator__input-wrapper calculator__input-wrapper--dollar">
            <input
              className="calculator__bill"
              type="number"
              name="bill"
              id="bill"
              placeholder="0"
              value={bill}
              onChange={(e) => {
                setBill(e.target.value);
                isError(e);
              }}
            />
          </div>
        </div>

        {/* buttons */}
        <div className="calculator__btns-container">
          <label className="calculator__label calculator__label--bigger-margin">
            Select Tip %
          </label>

          <div className="calculator__btns">
            {/* 5% */}
            <input
              className="calculator__tip"
              name="tip"
              id="tip5"
              type="radio"
              value="5"
              onChange={(e) => {
                setTipPercent(e.target.value);
                setCustom("");
              }}
            />
            <label className="calculator__btn-lbl" htmlFor="tip5">
              5%
            </label>

            {/* 10 */}
            <input
              className="calculator__tip"
              name="tip"
              id="tip10"
              type="radio"
              value="10"
              onChange={(e) => {
                setTipPercent(e.target.value);
                setCustom("");
              }}
            />
            <label className="calculator__btn-lbl" htmlFor="tip10">
              10%
            </label>

            {/* 15 */}
            <input
              className="calculator__tip"
              name="tip"
              id="tip15"
              type="radio"
              value="15"
              onChange={(e) => {
                setTipPercent(e.target.value);
                setCustom("");
              }}
            />
            <label className="calculator__btn-lbl" htmlFor="tip15">
              15%
            </label>

            {/* 25 */}
            <input
              className="calculator__tip"
              name="tip"
              id="tip25"
              type="radio"
              value="25"
              onChange={(e) => {
                setTipPercent(e.target.value);
                setCustom("");
              }}
            />
            <label className="calculator__btn-lbl" htmlFor="tip25">
              25%
            </label>

            {/* 50 */}
            <input
              className="calculator__tip"
              name="tip"
              id="tip50"
              type="radio"
              value="50"
              onChange={(e) => {
                setTipPercent(e.target.value);
                setCustom("");
              }}
            />
            <label className="calculator__btn-lbl" htmlFor="tip50">
              50%
            </label>

            <input
              type="number"
              placeholder="Custom"
              className="calculator__custom"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setTipPercent(e.target.value);
                isError(e);
              }}
            />
          </div>
        </div>

        {/* number of people */}
        <div className="calculator__people-container">
          <label className="calculator__label" htmlFor="people">
            Number of People
          </label>
          <div className="calculator__input-wrapper calculator__input-wrapper--person">
            <input
              className="calculator__people"
              type="number"
              id="people"
              name="people"
              placeholder="0"
              value={peopleNum}
              onChange={(e) => {
                setPeopleNum(e.target.value);
                isError(e);
              }}
            />
          </div>
        </div>

        {/* result */}
        <div className="calculator__result-container">
          <div className="calculator__inner-container">
            <div className="calculator__label-container">
              <p className="calculator__label">Tip Amount</p>
              <p>/ person</p>
            </div>
            <span className="calculator__amount">
              ${tipAmount ? tipAmount : "0.00"}
            </span>
          </div>

          <div className="calculator__inner-container">
            <div className="calculator__label-container">
              <p className="calculator__label">Total</p>
              <p>/ person</p>
            </div>
            <span className="calculator__total">${total ? total : "0.00"}</span>
          </div>

          <button
            className="calculator__reset-btn"
            onClick={() => {
              setBill("");
              setTipPercent("");
              setCustom("");
              setPeopleNum("");
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Calculator;
