
import './index.css'

const currencies= ["USD", "AUD", "SGD", "CNY", "EUR", "INR"]


const Footer =props=>{
    const {details,base} =props
    const {conversion_rates}=details
    console.log(details)

    return (
      <>
      <div className="footer-class">Exchange Rates of {base} with different Currencies</div>
      <ul className="list-design">
     {currencies.map(each=>
      <li className="list-individual-exchangeRates"> 1  {base} = <span className="base-currency-highlight"> {details.conversion_rates[each]} </span>  {each}  </li>)}
     </ul>
      </>
      
    )
}
export default Footer 