states = {
  EDIT: "edit",
};

class Edit {
  constructor() {
    this.value = states.EDIT;
  }
}

class StateChart {
  get_state() {
    return this.state.value;
  }

  constructor() {
    this.state = new Edit();
  }
}
