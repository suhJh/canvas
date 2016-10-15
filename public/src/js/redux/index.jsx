import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import todoApp from './reducers';
import { Row } from 'react-bootstrap';

// React 0.13의 이슈를 회피하기 위해
// 반드시 함수로 감싸줍니다.
const store = createStore(todoApp);

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
