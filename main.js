class SpendingApp{
    constructor(addBudgetButton,makePayementButton,table){
      addBudgetButton.addEventListener('click',this.addBudget.bind(this));
      add.budgetAmount = document.querySelector("#budget");
      this.errors = document.querySelectorAll(".error");
      this.showMyBudget = document.querySelector("reminder_budget_show");
      this.showMyExpenses = document.querySelector("#reminder_Spending_show")
      
    }
     addBudget(){
         if(+this.budgetAmount.value<0 || this.budgetAmount +this.budgetAmount.value===0 
            || isNaN(+this.budgetAmount.value)){

                this.errors[0].classList.add('error-show');
                this.budgetAmount.classList.add('input-error');
                setTimeout(()=>{
                    this.errors[0].classList.remove('error-show');
                    this.budgetAmount.classList.remove('input-error');

                },2000);
         } else{
                  this.showMyBudget.innerText = +this.budgetAmount.value;
                  this.showMyExpenses.innerText = +this.budgetAmount.value - +this.showMyExpenses.innerText;
                  this.budgetAmount.value = '';
         }
     }

}
document.addEventListener('DOMContentLoaded',init);

function init(){
    const addBudgetButton = document.querySelector('#add-btn');
    const makePayementButton = document.querySelector('#payment_now');
    const table = document.querySelector('table');
    new SpendingApp(addBudgetButton,makePayementButton,table);
}