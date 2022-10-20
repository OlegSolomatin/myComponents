import React from 'react';
import { Block } from './Block';
import './index.css'

function AppConverter() {

    /*const [rates, setRates] = React.useState([]);*/
    const ratesRef = React.useRef({});
    const [fromCurrency, setFromCurrency] = React.useState('RUB');
    const [toCurrency, setToCurrency] = React.useState('USD');
    const [fromPrice, setFromPrice] = React.useState(0);
    const [toPrice, setToPrice] = React.useState(0);

    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json').then((res) => res.json()).then((json) => {
            /*setRates(json.rates);*/
            ratesRef.current = json.rates;
            onChangeFromPrice(100);
        }).catch((err) => {
            console.warn(err)
            alert('Не удалось загрузить данные, попробуейте позже')
        })
    }, []);

    const onChangeFromPrice = (value) => {
        const price = (value / ratesRef.current[fromCurrency]) * ratesRef.current[toCurrency];
        setFromPrice(value);
        setToPrice(price.toFixed(2));
    }

    const onChangeToPrice = (value) => {
        const price1 = (value / ratesRef.current[toCurrency]) * ratesRef.current[fromCurrency]
        setToPrice(value);
        setFromPrice(price1.toFixed(2));
    }

    React.useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency]);

    React.useEffect(() => {
        onChangeToPrice(toPrice);
    }, [toCurrency]);

  return (
      <div className="AppConverter">
        <Block
            value={fromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            onChangeValue={onChangeFromPrice}
        />
        <Block
            value={toPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
            onChangeValue={onChangeToPrice}
        />
      </div>
  );
}

export default AppConverter;
