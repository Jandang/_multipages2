import { useState, useEffect } from 'react';
import Variable from '../Variable/Variable';
import './Temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);
    const [kelvin, setKelvin] = useState(273.15);
    const [lastChanged, setLastChanged] = useState('celsius'); // ติดตามว่าใครเปลี่ยนล่าสุด

    // ฟังก์ชันแปลงอุณหภูมิ
    function celsiusToOther(celsius) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        const kelvin = celsius + 273.15;
        return { fahrenheit, kelvin };
    }

    function fahrenheitToOther(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        const kelvin = (fahrenheit + 459.67) * 5 / 9;
        return { celsius, kelvin };
    }

    function kelvinToOther(kelvin) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
        return { celsius, fahrenheit };
    }

    // ใช้ useEffect สำหรับการอัปเดตอุณหภูมิ
    useEffect(() => {
        if (lastChanged === 'celsius') {
            const { fahrenheit, kelvin } = celsiusToOther(celsius);
            setFahrenheit(parseFloat(fahrenheit.toFixed(2)));
            setKelvin(parseFloat(kelvin.toFixed(2)));
        }
    }, [celsius, lastChanged]);

    useEffect(() => {
        if (lastChanged === 'fahrenheit') {
            const { celsius, kelvin } = fahrenheitToOther(fahrenheit);
            setCelsius(parseFloat(celsius.toFixed(2)));
            setKelvin(parseFloat(kelvin.toFixed(2)));
        }
    }, [fahrenheit, lastChanged]);

    useEffect(() => {
        if (lastChanged === 'kelvin') {
            const { celsius, fahrenheit } = kelvinToOther(kelvin);
            setCelsius(parseFloat(celsius.toFixed(2)));
            setFahrenheit(parseFloat(fahrenheit.toFixed(2)));
        }
    }, [kelvin, lastChanged]);

    return (
        <div className="temperatures-container">
            <h3 className="temperatures-title">TEMPERATURES</h3>
            <h2 className='temperatures-display'>
                <span className='badge bg-primary'>{celsius}°C</span>
                <span className='badge bg-primary'>{fahrenheit}°F</span>
                <span className='badge bg-primary'>{kelvin}°K</span>
            </h2>
            <div className="temperatures-variables">
                <Variable
                    name={'Celsius'}
                    value={celsius}
                    setValue={(value) => {
                        setCelsius(value);
                        setLastChanged('celsius');
                    }}
                />
                <Variable
                    name={'Fahrenheit'}
                    value={fahrenheit}
                    setValue={(value) => {
                        setFahrenheit(value);
                        setLastChanged('fahrenheit');
                    }}
                />
                <Variable
                    name={'Kelvin'}
                    value={kelvin}
                    setValue={(value) => {
                        setKelvin(value);
                        setLastChanged('kelvin');
                    }}
                />
            </div>
        </div>
    );
}

export default Temperatures;
