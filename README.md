# React Multi Step Form

### Get Started with 
* npm install
* package json is somewhat customized
* npm run watch

# Components
### _Router, NotFound, App_
This Multi-step form is using a switch statement which reads the step from state and uses this to select which components are rendered at each step.

The user can then skip back and forth between steps using the `prevStep` and `nextStep` functions respectively.

The `handleChange` function updates the value of the details provided by the user inside state and it will be passed to the child components as props.

# Questions
