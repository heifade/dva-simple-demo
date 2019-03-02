import { IAction } from "../interface/iAction";
import { fetchData } from "../services/fetchData";
import { IDataItem } from "src/interface/iDataItem";

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
    *onFetch(action: IAction, { call, put }) {
      const list = yield fetchData(action.payload);
      yield put({ type: "fetchDone", payload: list });
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
