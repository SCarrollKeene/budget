// IIFE
// Budget Controller
let budgetController = (function() {

    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    function Income(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            let newItem;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push into our data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };

})();

// UI Controller
let UIController = (function() {
    // private method
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
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

    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings();
        // a standalone function can simply be passed into an event listener
        // doesn't need paranthesis to be a callback, event listener calls it
        // for us
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Global Keypress event listener
        document.addEventListener('keypress', function(e) {

            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };

    let ctrlAddItem = function() {
        let input, newItem;

        // 1. Get field input data
        input = UICtrl.getInput();

        // 2. Add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        //console.log("it works.");
    };

    return {
        init: function() {
            console.log('App has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
