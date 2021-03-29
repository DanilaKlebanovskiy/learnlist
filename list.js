class Node {  //element  list
    constructor(value){
        this.value = value
        this.next = null // 
    }
}


class List {
    constructor(){
        this.head = null
        this.tail = null 
        this.length = 0
    }
    push(value){
        this.length += 1
        if (this.head === null){
            this.head = new Node(value)
            return  
        }
        if (this.tail === null){
            let node = new Node(value)
            this.head.next = node
            this.tail = node
            return
        }
        let node = new Node(value)
        this.tail.next = node
        this.tail = this.tail.next

        
    }
    pop(){
    
        let cursor = this.head
        while(cursor.next.next != null){
            cursor = cursor.next

        }
        cursor.next = null
    }

    print(){
        let cursor = this.head
        while(cursor != null){
            console.log(cursor.value)
            cursor = cursor.next
        }
    }

}

let zz = new List ()

for (let i = 0; i < 5;i++){
    zz.push(i)
}

zz.print()
console.log(",,,,")
zz.pop()
console.log(",,,,")
zz.print()