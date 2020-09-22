class State {
  state: State;
  editor: HTMLDivElement;
  suggester: HTMLDivElement;
  actions: Array<Function>;

  transition(to: State): State {
    this.exit();
    to.enter();
    return to;
  }

  exit(): boolean {
    return true;
  }

  enter(): boolean {
    return true;
  }

  constructor() {
    this.editor = document.querySelector('#editor');
    this.suggester = document.querySelector('#suggester')
    this.actions = [];

    this.enter();
  }
}

class MetaState extends State {
  clear(): boolean {
    this.suggester.innerHTML = 'caps';
    return true;
  }

  enter(): boolean {
    this.clear();
    return true;
  }
}

class EditState extends State {
  enter(): boolean {
    this.focusEditor();
    return true;
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

class EditorStateChart extends State{
  constructor() {
    super();
    this.state = new EditState();
  }
}
























window.onload = () => {
  var esc = new EditorStateChart();
  esc.state.transition(new MetaState());
}