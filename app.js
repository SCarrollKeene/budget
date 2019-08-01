// IIFE
// Budget Controller
let budgetController = (function() {

    // some code

})();

// UI Controller
let UIController = (function() {
    // private method
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    }

    // public method that IIFE will return
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }; 
        },

        getDOMstrings: function() {
            // expose private DOMstrings method to public
            return DOMstrings;
        }
    };

})();


// Global App Controller
let controller = (function(budgetCtrl, UICtrl) {

    let ctrlAddItem = function() {
        // 1. Get field input data
        let input = UICtrl.getInput();
        console.log(input);

        // 2. Add item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        //console.log("it works.");
    }

    // a standalone function can simply be passed into an event listener
    // doesn't need paranthesis to be a callback, event listener calls it
    // for us
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Global Keypress event listener
    document.addEventListener('keypress', function(e) {

        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);

