// import {calculateInvestmentResults} from "../util/investment.js"
// import { useState } from "react"
export default function Input({handleInputChange,inputValues}){
    
    return(
        <section id="user-input">
            
            <div className="input-group">
            <p>
            <label >Initial Investment</label>
            <input  type="number"
            required
            value={inputValues.initialInvestment}
            onChange={(event)=>handleInputChange('initialInvestment',event.target.value)}
            />
            </p>
            <p>
            <label >Annual Investment</label>
            <input type="number"  
            required
            value={inputValues.annualInvestment}
            onChange={(event)=>handleInputChange('annualInvestment',event.target.value)}
            />
            </p>
            </div>
            <div className="input-group"> 
            <p>
            <label >Expected Return</label>
            <input type="number" 
            required
            value={inputValues.expectedReturn}
            onChange={(event)=>handleInputChange('expectedReturn',event.target.value)}
            />
            
            </p>
            <p>
            <label >Duration</label>
            <input type="number" 
            required
            value={inputValues.duration}
            onChange={(event)=>handleInputChange('duration',event.target.value)}
            />
            </p>
            </div>

        </section>
    )
}

{/* <div className="input-group">
<p>
<label htmlFor="input-initial-Investment">Initial Investment</label>
<input type="number" id="input-initial-Investment" />
</p>
<p>
<label htmlFor="input-annual-Investment">Annual Investment</label>
<input type="number" id="input-annual-Investment" />
</p>
</div>
<div className="input-group"> 
<p>
<label htmlFor="input-expected-return">Expected Return</label>
<input type="number" id="input-expected-return" />
</p>
<p>
<label htmlFor="input-duration">Duration</label>
<input type="number" id="input-duration" />
</p>
</div> */}