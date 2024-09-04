//creating node for the data;
class Node{
    constructor(data,next= null) {
        this.data = data;
        this.next = next;
    }

}

//creating empty linked list :----->

class LinkedList{
    constructor() {
        this.head = null;
    }
}


//inserting at the beginning of the linked list;

LinkedList.prototype.insertAtBeginning = function (data) {
  //first creating node for the first data
  const newNode = new Node(data);
  //after that we are assiging it to the the head becyse in linked list first data is head;
  this.head = newNode;
};

//inserting at the end of the linked list :----->


LinkedList.prototype.insertAtEnd = function (data) {
    //first we are creating the node ;
    
    const newNode = new Node(data);
    //here we are checking data is pointing to null or not , if not we will shift it to next data;
    //Empty string and null treated as false in js;
    //see if we have one data head and it is pointing to null , null treated as false in js and we got to know that it is the last element;
    //so here this.head is false and !this.head is true;

    if (!this.head) {
      
        this.head = newNode;

        return;
    }
  //here we got to know that we have more data so we pointing our head to newnode 
    let last = this.head;


    //here we are checking last.next is 
    
    while (last.next) {
        last = last.next;
    }


    last.next = newNode;


}

const list = new LinkedList();
list.insertAtBeginning(10); // Insert 10 at the beginning
list.insertAtEnd(20);  


console.log(list)


//Insert in a given node


LinkedList.prototype.insertAfter = function (prevNode, data) {
      //In this function we are taking prevNode and data which we need to add:---
     // after that we are checking prevnode can't be pointing to null;   
    if (!prevNode) {
        console.log("The given prev node cannot be null");
    }
    //creating newNode with new data
    const newNode = new Node(data, prevNode.next)

    //After that assigning prevnode.next refrance to newNode;
    prevNode.next = newNode
}

// Delete operation
//delete first node

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
}


//delete last node (second last node )


LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return;//nothing to delete if we have list is empty
    }
    if (!this.head.next) {
        this.head = null;//if there is only one node;
        return;
    }

    //first we are assuming second last is the head 

    let secondlast = this.head;
    //After that see we are lopping to check wheather we have value to the last element refrance 
    //if we fine node is refering to value we are moving our second last to next value and keep checking over there;
    while (secondlast.next.next) {
        secondlast = secondlast.next;
    }
    //if loop breaks the we know we have last value which refrance is pointing to null so that we are directly deleting the lastvalue by putting null 
    secondlast.next = null;
}