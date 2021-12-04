import { getLists } from '@/services/serach'
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: []
  },
  //同步
  reducers: {
    getLists(state, action){
      return {
        ...state,
        // lists: Array(10).fill(action.payload)
        lists: action.payload
      }
    }
  },
  //异步
  effects: {
    *getListsAsync({payload}, {call, put}){ //payload指参数， call调用异步函数， put事件派发
      const res = yield call(getLists, payload);
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}