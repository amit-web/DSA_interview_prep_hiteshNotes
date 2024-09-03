class queue{
  constructor() {
      this.queueData = [];
    }
    //Adding data in queue str.
    enqueue(data) {
        this.queueData.push(data);
    }
  // removing data from queue and shifting all the data to that position which is removed.
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.queueData.shift();
    }

    // checking the length of the queue and

    isEmpty() {
        return this.queueData.length===0
    }
    //top element of the queue;
    peek() {
        return this.queueData[0];
    }

    //size of the queue;

    size() {
        return this.queueData.length;
    }
    //Empty the queue
    clear() {
        this.queueData = [];
    }
    
    printQueue() {
        let str = "";
        for (let i = 0; i < this.queueData.length; i++){
            str+=this.queueData[i]+"\n"
        }
        return str
    }
}


let myQueue = new queue();


myQueue.enqueue(10)
myQueue.enqueue(11); myQueue.enqueue(12); myQueue.enqueue(13); myQueue.enqueue(14);
myQueue.dequeue();


console.log(myQueue.printQueue())