import {Component} from 'react';
import './App.css';
import {LinearProbingHashTable} from './hashing/LinearProbing';
import {HashTable, Element} from "./hashing";

export class App extends Component {
    private readonly numberOfItems: number;
    private randomArrayValues: Array<Element>;
    private randomArrayKeys: Array<number>;
    private readonly arraySize: number;

    constructor(props: Readonly<{}>) {
        super(props);
        this.numberOfItems = 100000;
        this.arraySize = this.numberOfItems * 2;
        this.randomArrayValues = [];
        this.randomArrayKeys = [];
    }

    render() {
        return null;
    }


    testHashCode(hashTable: any) {
        console.time("HashCode");
        for (let i in this.randomArrayKeys) {
            hashTable.getHashCode(this.randomArrayValues[i]);
        }
        console.timeEnd("HashCode");
    }

    testHashInsertion(hashTable: any) {
        console.time("Insertion Hash Table");
        for (let i in this.randomArrayKeys) {
            hashTable.insert(this.randomArrayValues[i], "foo");
        }
        console.timeEnd("Insertion Hash Table");
    }

    testHashTableGet(hashTable: any) {
        this.randomArrayValues = this.shuffle(this.randomArrayValues);
        console.time("Get Items Hash Table");
        for (let i in this.randomArrayValues) {
            hashTable.get(this.randomArrayValues[i]);
        }
        console.timeEnd("Get Items Hash Table");
    }

    testArrayInsertion() {
        const arr = new Array(this.numberOfItems);
        console.time("Insertion Array");
        for (let i in this.randomArrayKeys) {
            arr.push([this.randomArrayValues[i], "foo"]);
        }
        console.timeEnd("Insertion Array");
    }


    testArrayGet() {
        this.randomArrayValues = this.shuffle(this.randomArrayValues);
        console.time("Get Array");
        for (let i in this.randomArrayValues) {
            // @ts-ignore
            this.randomArrayValues.indexOf(i);
        }
        console.timeEnd("Get Array");
    }


    createHashTable(type: string): void {
        const ht = new LinearProbingHashTable(this.arraySize);
        this.testHashInsertion(ht);
        this.testHashTableGet(ht);

        const hc = new HashTable(this.numberOfItems);
        this.testHashCode(hc);

        // Arrays
        this.testArrayInsertion();
        this.testArrayGet();
    }


    componentDidMount() {
        for (let i = 1; i < this.numberOfItems + 1; i++) {
            // @ts-ignore
            this.randomArrayValues.push(i);
            this.randomArrayValues = this.shuffle(this.randomArrayValues)
        }
        for (let i = 0; i < this.numberOfItems; i++) {
            // @ts-ignore
            this.randomArrayKeys.push(i);
            this.randomArrayKeys = this.shuffle(this.randomArrayKeys);
        }

        this.createHashTable('linearProbing');
    }

    shuffle(a: any) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}

export default App;
