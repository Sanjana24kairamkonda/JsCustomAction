const core = require('@actions/core');

try {
  // Get the input 'name' from the GitHub workflow file
  const name = core.getInput('name');
  
  // Output a greeting message
  console.log(`Hello, ${name}!`);
  
  // Set an output value
  core.setOutput('greeting', `Hello, ${name}!`);
} catch (error) {
  core.setFailed(error.message);
}
`
