**NOTE: Folder structure not yet decided!! This will be published as npm package once library becomes rich enough.**

1. This library will provide some set of functions which will help you to write code in a much cleaner way and
   under the hood it will maintain best practices of writing code.
   For example: let's say you want to write if-else chaining in your code.
   But there is better way to write if-else chaining in JS/typescript using object notation which we don't follow all the time while writing code.
   But if you use this library that will be very easy to maintain through your code base.

   ```
   if (condition) { execute flow1; } else { execute flow2; }
   you can write the above code in below format.
   const expressionToFlowMappingArray = [
      {
         condition: condition1,
         flow: flowReference1
      },
      {
         condition: condition2,
         flow: flowReference2
      }
   ]
   ```

   and just pass the object to FlowWriter -> writeComplexConditionalFlow function.
   So, when we have complex if-else chaining or let's say switch case, your code will be written in best way and also it will look clean.

2. Also it will provide you lots of logics which we are using in daily basis.
   e.g. find minimum/maximum from array, deep compare objects, find key value pair from an object and many more.
3. Also this library will hide all the syntactical sugar-coat from your code e.g. +, -, ++, --, logiocal operator, conditional operator, creating object literal, declaring local variables and many more. So, eventually your code base will look like function driven / instruction based code base. Whoever will look at your code, he/she can understand what you are trying to do by reading the function name itself without knowing syntactical sugar-coat.
