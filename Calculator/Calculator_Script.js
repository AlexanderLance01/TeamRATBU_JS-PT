 
  var Display_Value = '';
  var Current_Input = '';
  var Current_InputOperator = '';

    // taga update ng display kung anong nilagaya mo
   function ToDisplay(value) {
    Display_Value += value;
    document.getElementById('display').value = Display_Value;
    Current_Input += value;
   }

    // taga 'delete' or reset input values and operators
   function Clear_Display() {
    Display_Value = '';
    Current_Input = '';
    Current_InputOperator = '';
    document.getElementById('display').value = Display_Value;
   }

     // taga gawa ng mathematical operations
    function Perform_Operation(operator) {
    
    if (Current_InputOperator) {
        calculate(); 
    }
    
    // taga update ng current operator at display value
    Current_InputOperator = operator;
    Current_Input += operator;
    Display_Value += operator;

    // new value
    document.getElementById('display').value = Display_Value;
}


   function calculate() {
    try {
        var result = eval(Current_Input);
        Display_Value = result;
        document.getElementById('display').value = Display_Value;
    } 
    catch (error) {    
        Display_Value = 'Error';
        document.getElementById('display').value = Display_Value;
    }

    // taga update ng current input at operator para sa further nila ata ito at yun
    Current_Input = result.toString(); 
    Current_InputOperator = '';
}
