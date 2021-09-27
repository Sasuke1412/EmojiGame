import  { Component } from "react";
import {AiOutlineSwap} from "react-icons/ai"
import Footer  from '../Footer'
import Header from '../Header'
import './index.css'

class Converter extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "CNY", "EUR", "INR"],
    base: "INR",
    amount: "",
    convertTo: "USD",
    result: "",
    date: "",
    inputData:[],
    canFooterLoad:false
  };

 

  handleSelect = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = event => {
    this.setState(
      {
        amount: event.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleSwap = event => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    event.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };

  fectchConversionRates=async(amount)=>{
    const {base}=this.state
    const url=`https://v6.exchangerate-api.com/v6/7435e25b1c1023038481678e/latest/${base}`
    const response= await fetch(url)
    const data=await response.json()
   //console.log(data)
   const date = data.time_last_update_utc;
   console.log(data)
  const result = (data.conversion_rates[this.state.convertTo] * amount).toFixed(2);
  this.setState({
      result,
      date,
      inputData:data,
      canFooterLoad:true
    });
  }

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      this.fectchConversionRates(amount)
    }
  };

  render() {
    const { currencies, base, amount, convertTo, result, date,canFooterLoad } = this.state;
    return (

     
      <div className="bg-container-converter">
         <Header />
        <div className="envolpe">
            <h1 className="main-heading"> Currency Exchange </h1>
            <div className="Select-options-design">
              <select
                className="source-selection-options"
                name="base"
                value={base}
                onChange={this.handleSelect}
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <div className="" onClick={this.handleSwap}>
                <AiOutlineSwap className="design-icon"/>  
              </div>
              <select
                className="target-selection-options"
                name="convertTo"
                value={convertTo}
                onChange={this.handleSelect}
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div className="card-container">
              <h1>
                <span className="source-indicator"> {base}  </span> <span className="divider-btwn-currencies">| </span>  {convertTo} 
              </h1>
              <p>As of {date}</p>

              <div className="">
                <div className="group-container">
                  <form className="source-group"> 
                    <input
                      className="input-box input-source-box"
                      value={amount}
                      type="number"
                      onChange={this.handleInput}
                    />
                  </form>
                  <form className="target-group">
                    <input
                      className="input-target-box input-box "
                      disabled={true}
                      value={result === null ? "Calculating..." : result}
                    />
                  </form>
              </div>
            </div>
          </div>
        </div>
  
      {canFooterLoad?<Footer details={this.state.inputData}  base={this.state.base}/> : ''}
    </div>
    );
  }
}

export default Converter;
