//How to explain stack with example in interview?

class stack {
    constructor (){
       this.stack = [];
    }
  
    //data we ant to push into the stack 

   push(element){
    return this.stack.push(element);
   }

   //we want to pop the element from the stack;
   pop(){
    return this.stack.pop()
   }

   //we want to check peek value in the stack ;

   peek (){
      return this.stack[this.stack.length-1];
   }

   //need to check wheather stack is empty or not ?
   isEmpty(){
        return this.stack.length===0
   }

   //we want to find size of the stack ;

   size(){
    return this.stack.length;
   }

   // we want to empty the stack ?

   clear (){
    return this.stack = []
   }


   //will give you one element and you need to find that element is present in that  stack or not ;

   contain (element){
    return this.stack.includes(element);
   }


   // we want to reverse the satck;

   reverse(){
    return this.stack.reverse();
   }

   //Need to print all value avialbale in the stack;


   printStack(){
    let string = ""
    for(let i =0;i<this.stack.length;i++){
        string+=this.stack[i]+"\n"   
    }
    return string;
   }
}

//Usages of above class

const firstStack = new stack;

firstStack.push(4);
firstStack.push(5);
firstStack.push(6);
firstStack.push(7);
firstStack.push(8);
firstStack.push(9);

console.log(firstStack);
console.log(firstStack.printStack());


//Mostly we need to explain this only and job done for this.
