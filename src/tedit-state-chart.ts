
class State {
  editor: HTMLDivElement;
  suggester: HTMLDivElement;
  constructor() {
    this.editor = document.querySelector('#editor');
    this.suggester = document.querySelector('#suggester')
  }
}

class MetaState extends State {
  constructor() {
    super();
  }
}

class EditState extends State {
  constructor() {
      super();
    }

    printchr(chr: string): boolean {
      this.editor.innerHTML += chr;
      return true;
    }

    focusEditor(): boolean {
      this.editor.focus();
      return true;
    }
}

class EditorStateChart {
  state: State;

  constructor() {
    this.state = new EditState();
  }
}
