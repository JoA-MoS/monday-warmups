class List {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    push(node){
        const emptyList = !this.head;
        if(emptyList){
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }
    pop(){
        const emptyList = !this.head;
        if(emptyList){
            return null;
        }
        const node = this.head;
        const onlyOneNode = this.tail === this.head;
        if(onlyOneNode){
            this.tail = null;
        }
        this.head = this.head.next;
        return node;
    }
    append(node){
        const emptyList = !this.head;
        if(emptyList){
            this.push(node);
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    trim(){
        const emptyList = !this.head;
        if(emptyList){
            return null;
        }
        const node = this.tail;

        const onlyOneNode = this.tail === this.head;
        if(onlyOneNode){
            this.tail = null;
            this.head = null;
            return node;
        }

        let current = this.head;
        while(current.next !== this.tail){
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        return node;

    }
    insertAfter(node, target){
        let current = this.head;
        while(current !== null){
            if(current === target){
                if(this.tail === target){
                    this.tail = node;
                }
                node.next = target.next
                target.next = node;
                return;
            }
            current = current.next;
        }
        //TODO - throw an error if function doesn't return
    }

}
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

export {
    List,
    Node
};


// SOLID principles
// Single responsibility principle
// Open/Closed - Open to extension but closed to modification

