import { Component } from 'react';
import './App.css';
import { LinearProbingHashTable } from './hashing/LinearProbing';

export class App extends Component {
  render() {
    return null;
  }

  testItems(hashTable: any) {
    console.time();
    hashTable.insert(2, "foo");
    hashTable.insert(12, "bar");
    hashTable.get(2);
    hashTable.insert(22, "foo1");
    hashTable.insert(39, "bar1");
    hashTable.get(12);
    console.timeEnd();
  }


  createHashTable(type: string): void {
    const ht = new LinearProbingHashTable(10);
    this.testItems(ht);
  }


  componentDidMount() {
    this.createHashTable('linearProbing');
  }
}

export default App;
