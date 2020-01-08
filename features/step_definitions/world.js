import { setWorldConstructor } from 'cucumber';
import TaskManager from '../../src/core';

class World {
  constructor() {
    this.taskManager = new TaskManager();
  }
}

setWorldConstructor(World);
