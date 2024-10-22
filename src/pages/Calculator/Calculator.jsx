/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [screenValue, setScreenValue] = useState('');
  const [lastOperation, setLastOperation] = useState(null); // เก็บเครื่องหมายล่าสุด
  const [lastNumber, setLastNumber] = useState(null);       // เก็บตัวเลขล่าสุด
  const [isFirstEqualPress, setIsFirstEqualPress] = useState(true); // แยกการกดครั้งแรกกับซ้ำ
  const [lastresult, setLastresult] = useState(null); // แยกการกดครั้งแรกกับซ้ำ

  const appendNumber = (num) => {
    setScreenValue((prevValue) => prevValue + num);
  };

  const appendOperation = (operation) => {
    if (screenValue !== '' && !isNaN(screenValue.slice(-1))) {
      if (lastOperation) {
        calculate(); // คำนวณค่าปัจจุบันก่อนเพิ่ม operator
      }
      setScreenValue((prevValue) => prevValue + operation);
      setLastOperation(operation); // เก็บ operator ล่าสุด
      setIsFirstEqualPress(true); // ตั้งค่าให้รู้ว่าเป็นการคำนวณครั้งใหม่
      setLastNumber(screenValue); // เก็บตัวเลขล่าสุด
    }
  };

  const clearClick = () => {
    setScreenValue('');
    setLastOperation(null);
    setLastNumber(null);
    setLastresult(null);
    setIsFirstEqualPress(true);
  };

  const backspace = () => {
    setScreenValue((prevValue) => prevValue.slice(0, -1));
  };

  const toggleSign = () => {
    if (screenValue) {
      setScreenValue((prevValue) =>
        prevValue.charAt(0) === '-' ? prevValue.slice(1) : '-' + prevValue
      );
    }
  };

  const calculate = () => {
    try {
      if (!isNaN(screenValue.slice(-1))) {
        const result = eval(screenValue); // คำนวณผลลัพธ์ปกติ
        setScreenValue(result.toString());
        // setLastNumber(result); // เก็บผลลัพธ์ล่าสุด
        setLastresult(result);
      }
    } catch (error) {
      setScreenValue('Error');
    }
  };

  const handleEquals = () => {
    if (isFirstEqualPress) {
      // ถ้าเป็นการกดครั้งแรก คำนวณปกติ
      calculate();
      setIsFirstEqualPress(false); // ตั้งให้รู้ว่าได้กดเท่ากับแล้ว
    } else if (lastOperation && lastNumber !== null) {
      // ถ้ากดเท่ากับซ้ำ ให้ใช้ค่าผลลัพธ์สุดท้ายคำนวณกับ operator ที่เก็บไว้
      const newScreenValue = lastresult + lastOperation + lastNumber; // ใช้ lastNumber สองครั้ง
      try {
        const result = eval(newScreenValue);
        setScreenValue(result.toString());
        // setLastNumber(result); // อัปเดตผลลัพธ์ใหม่
        setLastresult(result);
      } catch (error) {
        setScreenValue('Error');
      }
    }
  };

  const checkEmpty = () => {
    if (screenValue === '') {
      setScreenValue('');
    }
  };

  return (
    <div className="center-flex">
      <span className="my-box">
        <div id="calculator" className="calculator">
          <div>
            <input type="text" id="screen" value={screenValue} onBlur={checkEmpty} disabled />
          </div>

          <div>
            <button id="clear" onClick={clearClick} className="buttons">C</button>
            <button id="divide" onClick={() => appendOperation('/')} className="buttons">÷</button>
            <button id="multiply" onClick={() => appendOperation('*')} className="buttons">×</button>
            <button id="backspace" onClick={backspace} className="buttons">←</button>
          </div>

          <div>
            <button id="seven" onClick={() => appendNumber('7')} className="buttons">7</button>
            <button id="eight" onClick={() => appendNumber('8')} className="buttons">8</button>
            <button id="nine" onClick={() => appendNumber('9')} className="buttons">9</button>
            <button id="subtract" onClick={() => appendOperation('-')} className="buttons">-</button>
          </div>

          <div>
            <button id="four" onClick={() => appendNumber('4')} className="buttons">4</button>
            <button id="five" onClick={() => appendNumber('5')} className="buttons">5</button>
            <button id="six" onClick={() => appendNumber('6')} className="buttons">6</button>
            <button id="add" onClick={() => appendOperation('+')} className="buttons">+</button>
          </div>

          <div>
            <button id="one" onClick={() => appendNumber('1')} className="buttons">1</button>
            <button id="two" onClick={() => appendNumber('2')} className="buttons">2</button>
            <button id="three" onClick={() => appendNumber('3')} className="buttons">3</button>
            <button id="equals" onClick={handleEquals} className="taokap buttons">=</button>
          </div>

          <div>
            <button id="plus-minus" className="samtau buttons" onClick={toggleSign}>+/-</button>
            <button id="zero" className="samtau buttons" onClick={() => appendNumber('0')}>0</button>
            <button id="decimal" className="samtau buttons" onClick={() => appendNumber('.')}>.</button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Calculator;
