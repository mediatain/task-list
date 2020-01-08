import uuid from 'uuid/v4';

/**
 * @property {string} id
 * @property {string} description
 * @property {boolean} done
 */
export default class Task {
  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
  }
}
