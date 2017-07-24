/**
 * @param {number} capacity
 */

var CacheNode = function(key, value) {
    this.val = value;
    this.key = key;
    this.prev = null;
    this.next = null;   
}

var LRUCache = function(capacity) {
    this.map = {};
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
    this.size = 0;
};

// does not return anything
LRUCache.prototype.addToHead = function(node) {
    if (this.head === null) {
       this.head = node;
        this.tail = node;
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    this.map[node.key] = node;
    this.size++;
}

LRUCache.prototype.removeLastNode = function() {
    if (this.tail === null) {
        return;
    }
    if (this.head === this.tail) {
        //remove from the map
        delete this.map[this.tail.key];
        this.head = null;
        this.tail = null;
    } else {
        delete this.map[this.tail.key];
        this.tail.prev.next = null;
        this.tail = this.tail.prev;  
    }
    this.size--;
}

LRUCache.prototype.moveToFront = function(node) {
    let prev = node.prev;
    if (prev !== null) {
        prev.next = node.next;
    } else {
        // it's already the front
        return;
    }
    let next = node.next;
    if (next !== null) {
        next.prev = prev;
    } else {
      this.tail = prev;
    }
    node.prev = null;
    
    this.addToHead(node);
}





/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // find the node in the linked list
    let node = this.map[key];
    if (node === undefined) {
        return -1;
    }
    
    // move the node to the front of the linked list
    this.moveToFront(node);
    
    // return the value;
    return node.val;
    
    //if not found, return -1;  
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //console.log('hi');
    if (this.size < this.capacity) {
        // creat a new node
        if (this.map[key] === undefined) {
          let newNode = new CacheNode(key, value);
          
          // prepend the new node to lru cache head
          this.addToHead(newNode);
        } else {
          this.map[key].val = value;
        }
        
    } else {
      if (this.map[key] === undefined) {
        // remove the last node from the linked list
        this.removeLastNode();
        //console.log(this.map);
        
        // create a new node
        let newNode = new CacheNode(key, value);
        // prepend the new node to lru cache head
        this.addToHead(newNode);

      } else {
        this.map[key].val = value;
      }
        
    }
};

const lru = new LRUCache(2);

lru.put(2,6);
lru.put(1,5);
lru.put(1,2);
lru.get(1);
console.log(lru.head);
