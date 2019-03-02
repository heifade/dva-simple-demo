import { IAction } from "../interface/iAction";
import { fetchData } from "../services/fetchData";
import { IDataItem } from "../interface/iDataItem";

export const NAMESPACE_INDEX = "index";
export interface IIndexModelState {
  value: number;
  list: IDataItem[];
}

export default {
  namespace: NAMESPACE_INDEX,

  state: {
    value: 0,
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {}
  },

  effects: {

    // *onFetch2(action: IAction, { call, put }) {
    //   return yield fetchData(action.payload);
    // },

    *onFetch(action: IAction, { call, put }) {
      const list = yield fetchData(action.payload);
      yield put({ type: "fetchDone", payload: list });

      // 同步调用 onFetch2
      // const list2 = yield yield put({ type: "onFetch2", payload: {} });
      // console.log(3, list2);
    }
  },

  reducers: {
    fetchDone(state: IIndexModelState, action: IAction): IIndexModelState {
      return {
        ...state,
        list: action.payload
      };
    },

    add(state: IIndexModelState, action: IAction): IIndexModelState {
      return {
        ...state,
        value: state.value + action.payload
      };
    }
  }
};
