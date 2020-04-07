import {HashTable, Element} from './index';

export class LinearProbingHashTable extends HashTable {

    searchHashTableForKey(key: Element) {
        let hashCode = this.getHashCode(key);
        let arrayLengthTraversed = 0;
        // @ts-ignore
        while (this.array[hashCode] === undefined || this.array[hashCode][0] !== key) {
            arrayLengthTraversed += 1;
            if (arrayLengthTraversed === this.size) {
                return 0;
            }
            hashCode = (hashCode + 1) % this.size;
        }
        return hashCode;
    }

    insert(key: Element, value: Element) {
        let hashCode = this.getHashCode(key);
        while (this.array[hashCode] !== undefined) {
            hashCode = (hashCode + 1) % this.size;
        }
        this.array[hashCode] = [key, value];
        // return 1;
    }

    get(key: Element) {
        const keyIndex = this.searchHashTableForKey(key);
        if (!keyIndex) {
            return `${key} is not present in dictionary`;
        } else {
            // @ts-ignore
            return this.array[keyIndex][1];
        }
    }

    delete(key: Element) {
        const keyIndex = this.searchHashTableForKey(key);
        if (!keyIndex) {
            return `${key} is not present in dictionary`;
        } else {
            this.array[keyIndex] = undefined;
            return 1;
        }
    }

}
