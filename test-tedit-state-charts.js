function initial() {
  let chart = new StateChart();
  return (
    typeof chart.get_state() !== "undefined" &&
    chart.get_state() === states.EDIT
  );
}
add_test(initial, "unexpected initial state");

function defined() {
  new StateChart();
  return true;
}
add_test(defined, "StateChart is not defined");

function empty() {
  return true;
}
add_test(empty, "enviroment failed to initialize");

// engine
runSuite();

function execute(test) {
  try {
    test.result = test.run();
  } catch (exception) {
    test.result = false;
    test.exception = exception;
  }
}
