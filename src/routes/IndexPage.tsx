import React from "react";
import { connect } from "dva";
import { IDispatch } from "src/interface/iDispatch";
import { IIndexModelState, NAMESPACE_INDEX } from "../models/indexModel";

interface IProps {
  dispatch: IDispatch;
  indexState: IIndexModelState;
}

class IndexPage extends React.PureComponent<IProps> {
  onFetch = () => {
    const { dispatch } = this.props;
    dispatch({
      type: `${NAMESPACE_INDEX}/onFetch`,
      payload: {
        id: 1,
        name: ""
      }
    });
  };
  onAdd = () => {
    const { dispatch } = this.props;
    dispatch({
      type: `${NAMESPACE_INDEX}/add`,
      payload: 1
    });
  };
  render() {
    const {
      indexState: { value, list }
    } = this.props;
    return (
      <div>
        <div>{value}</div>
        <ul>
          {list.map(item => (
            <React.Fragment key={item.id}>
              <li>{item.id}</li>
              <li>{item.name}</li>
            </React.Fragment>
          ))}
        </ul>
        <input type="button" onClick={this.onFetch} value="调用异步方法查询" />
        <input type="button" onClick={this.onAdd} value="调用同步方法加" />
      </div>
    );
  }
}

export default connect(state => {
  return {
    indexState: state[NAMESPACE_INDEX]
  };
})(IndexPage);
