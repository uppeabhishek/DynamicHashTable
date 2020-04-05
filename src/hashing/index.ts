export interface Element {
    item: string | number
}

export class HashTable {
    protected readonly array: Array<Array<Element>>;
    protected readonly size: number;

    constructor(size: number) {
        this.size = size;
        this.array = new Array(size);
    }

    getHashCode(item: any): number {
        if (typeof item === 'number') {
            return item % this.size;
        }

        else {
            let hash = 0;
            // Hash code implementation from java
            for (let i = 0; i < item.length; i++) {
                let char = item[i].charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return hash;
        }
    }

    printHashTable() {
        console.table(this.array);
    }
}