import {formatter} from "../util/investment.js"
import {calculateInvestmentResults} from "../util/investment.js"

export default function ResultsTable({inputValues}){
    const annualData= calculateInvestmentResults(inputValues);
    const initialInvestment=
    annualData[0].valueEndOfYear-
    annualData[0].interest-
    annualData[0].annualInvestment;
    return (
        <table id="result" >
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody className="center">
                {annualData.map((item, index) => {
                    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;

                    return (
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    );
             })}
            </tbody>
        </table>

    );
}