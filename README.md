# javascripts
 Java Script learning

 # Constant
    const = 10;
    If we assign any values to const we cannot able to modify the value,but we manipule in object.

 # DataTypes
    Primitive   
        String
        Number
        Boolean
        Undefined Type
        Null Type
        Big Int Type
        Symbol Type
    Non Primitive
        Objects
# Equality
    == (Allows coercion) 
    === (Does not allow coercion)

# Conditional Statements
    if 
    else
    else if
    switch

# Looping Code
    for
        for(initializer;condition;final-experssion){}
    while
        initializer
        while(condition){
            final -experssion
        }
    Do..while 
    for..of loop


 # Functions
    * A Javascript function is a block of code designed to perform particular task
        Ex : Add two numbers,Multiply Two Numbers
    * Functions are reusable as they can be defined once and can be called with different values resulting in different results.
    * Functions help divide a complex problem into smaller chunks and makes your program easy to understand and maintain
        function name(parameter1,parameter2,parameter3){}     

# Scope 
    Scope basically determines the accessibility or visibility of variables
    Block scope : Variable inside a pair of curly braces cannot be accessed from the outside block.
    Function Scope : Variable declared inside a function cannot be accessed from the outside the function.
    Global Scope : Globally scoped variable can be accessed inside a block or a function. 

# Closure
    A Closure is a combination of the fn bundeled together with ref. to its surrounding state.Closures are created every time a fn is created,at func creation time.
    In Js,When we return a fn from another fn,we are effectively returning a combination of the fn def along with the fn scope.This would let the fn definition along with the fn's scope.This would let the fn definition have an associated persistent memory which could hold on to live data between executions.That Combination of the fn and its scope chain is what is called a closure in javascript.

# Function Currying 
    Currying is a process in functional programming in which we transform a fn with multiple args into a seq of nesting func that takes one args at a time.
    function f(a,b,c) to f(a),(b),(c) 

# Order of precedencr
    New Binding
    Explicit Binding
    Implicit Binding 
    Default Binding
                      
