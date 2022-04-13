import { readFile } from 'fs/promises';

class BaseRepostiory {
  file: string
  constructor({ file }) {
    this.file = file
  }

  async find(itemId) {
    const content = JSON.parse(await readFile(this.file, 'utf8'));
    if (!itemId) return content;

    return content.find(({ id }) => id === itemId);
  }
}

export { BaseRepostiory };