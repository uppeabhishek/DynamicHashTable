import { HashTable, Element } from './index';
export class LinearProbingHashTable extends HashTable {


    insert(key: Element, value: Element) {
        let hashCode = this.getHashCode(key);
        while (this.array[hashCode] !== undefined) {
            hashCode = (hashCode + 1) % this.size;
        }
        this.array[hashCode] = [key, value];
    }

    get(key: Element) {
        let hashCode = this.getHashCode(key);
        let arrayLengthTraversed = 0;
        while (this.array[hashCode] === undefined || this.array[hashCode][0] !== key) {
            arrayLengthTraversed += 1;

            if (arrayLengthTraversed === this.size) {
                return `${key} is not present in dictionary`;
            }
            hashCode = (hashCode + 1) % this.size;
        }
        return this.array[hashCode][1];
    }

    delete(key: Element) {

    }

}