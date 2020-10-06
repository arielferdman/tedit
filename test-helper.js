// init
let tests = [];

function add_test(test, msg) {
  tests.unshift({
    run: test,
    msg: msg,
    name: test.name,
  });
}

function runSuite() {
  tests.forEach((test) => {
    // handle test execution + exception
    execute(test);

    // prepare test output
    let output = prepareOutput(test);

    // log test output to console
    log(output, test);
  });
}
function log(output, test) {
  console.log("%c " + `${output}`, test.output_style);
}
function prepareOutput(test) {
  test.output_style =
    console_output_style + `background: ${output_style[test.result]};`;

  let output = "";
  if (test.result) {
    output += `${test.name} has passed`;
  } else {
    output += `${test.name} has failed\n ` + `msg: ${test.msg}`;

    // add exception, if exists, to test output
    if ("exception" in test) {
      output += `\n exception: ${test.exception}`;
    }
  }
  return output;
}
function execute(test) {
  try {
    test.result = test.run();
  } catch (exception) {
    test.result = false;
    test.exception = exception;
  }
}
