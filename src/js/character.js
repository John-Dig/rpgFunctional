

const health = {
  health: 10
}

const karma = {
  karma: 10
}

const attitude = {
  attitude: 10    
} 

const Richard = {...health, ...karma, ...attitude}

const Charlie = {...health, ...karma, ...attitude}

const stateControl = (state) => {
  return {
    changeState: (attribute) => {
      return (value) => {
        return {
          ...state,
          [attribute]: (state[attribute]) + value
        }
      }
    }
  }
}