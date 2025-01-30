import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import Transactionlist from "./components/Transactionlist";
const App=() =>{
  const [transactions,setTransactions] = useState([{
  id:1,
  title:'snacks',
  amount:-150},
  {
    id:2,
    title:'salary',
    amount:300},
    {
      id:3,
      title:'Book',
      amount:-10},
      {
        id:4,
        title:'Note',
        amount:-50
      }])
    
      const addTransaction=(title,amount)=>{
        console.log("Add=>",title,amount);
        const newTxn={
          id: transactions.length+1,
          title:title,
          amount: +amount
       }
       setTransactions([...transactions,newTxn])
      }
  return(
    <>
    <h1>Expense Tracker</h1>
    <Transactionlist transactions={transactions}/>
    <TransactionForm addTransaction={addTransaction}/>
    </>
  );
};
export default App;