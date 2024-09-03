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