import 'character.js'

// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const stateControl = storeState();

// This is a function factory. 
// We can easily create more specific functions that 
// alter a hero's health, karma, etc. to varying degrees.
const changeState = (attribute) => {
  return (value) => {
    return (state) => ({
      ...state,
      [attribute]: (state[attribute]) + value
    })
  }
}

//create functions using our function factory.
const heal1 = changeState("health")(1);
const hurt1 = changeState("health")(-1);
const karma1 = changeState("karma")(1);
const bad1 = changeState("karma")(-1);
const motivate1 = changeState("attitude")(1);
const drain1 = changeState("attitude")(-1);


window.onload = function () {
  //always has side effects because we are manipulating the DOM
  document.getElementById('heal').onclick = function () {
    const newState = stateControl(heal1);
    document.getElementById('health').innerText = newState.health;
  };
  document.getElementById('hurt').onclick = function () {
    const newState = stateControl(hurt1);
    document.getElementById('health').innerText = newState.health;

  };

  document.getElementById('good').onclick = function () {
    const newState = stateControl(karma1);
    document.getElementById('karma').innerText = newState.karma;
  };

  document.getElementById('bad').onclick = function () {
    const newState = stateControl(bad1);
    document.getElementById('karma').innerText = newState.karma;
  };

  document.getElementById('motivate').onclick = function () {
    const newState = stateControl(motivate1);
    document.getElementById('attitude').innerText = newState.attitude;
  };

  document.getElementById('drain').onclick = function () {
    const newState = stateControl(drain1);
    document.getElementById('attitude').innerText = newState.attitude;
  };

  document.getElementById('show-state').innerText = currentState.health;
  //we just need to call stateControl() without arguments to see current state.

};

