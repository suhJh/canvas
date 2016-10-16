import React from 'react';
import { Row } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import todoApp from './reducers';


// React 0.13의 이슈를 회피하기 위해
// 반드시 함수로 감싸줍니다.
const store = createStore(todoApp);
const next = store.dispatch;

store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}

const Re = React.createClass({
  render() {
    const style = {
      marginTop: '30px',
    };
    return (
      <Row style={style} >
        <Provider store={store}>
          <App />
        </Provider>
      </Row>
    );
  },
});

export default Re;
