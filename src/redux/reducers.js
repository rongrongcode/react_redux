//reducers 本质是一个函数
const init = 0;
export  function todoApp(preState=init,action){
    const {type,data} = action;
    switch (type){
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}