// IIFE
// Budget Controller
let budgetController = (function() {

    // some code

})();

// UI Controller
let UIController = (function() {

    // some code

})();

// Global App Controller
let controller = (function(budgetCtrl, UICtrl) {

    let ctrlAddItem = function() {
        // 1. Get field input data

        // 2. Add item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        console.log("it works.");
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Global Keypress event listener
    document.addEventListener('keypress', function(e) {

        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);

