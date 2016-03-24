/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */


var calculatorModule = function() {

// private variables
  var _total = 0;
  var _memory = 0;

  function isNum(x) {
    if (typeof x !== 'number') {
      throw new Error('Not a number, plz try again');
    }

  }


/**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

return{

  load: function(x) {
      isNum(x);
      _total = x;
      return _total;
    },

  /**
   * Return the value of `total`
   * @return { Number }
   */

  getTotal: function() {
    return _total;
  },

/**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   add: function(x) {
     isNum(x);
    _total = _total + x;
    return this.getTotal();
   },


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  subtract: function(argument) {
    // body...

     if (typeof x !== "number"){
        throw new Error("not a number");
   }
    _total = _total - x;
    return _total;
   }
  },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(x){
     isNum(x);
    _total *= x;
    return _total;
   },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide(x){
      isNum(x);
    _total = _total/x;

    return _total;
   },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function recallMemory(){
    return _memory;
   },

  /**
   * Stores the value of `total` to `memory`
   */
   function saveMemory(){
    _memory = _total;
    return  _memory;
   },

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory(){
    _memory = 0;
    return _memory;
   };

  /**
   * Validation
   */





// var calculator = {};

// return calculator;

 };


