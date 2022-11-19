import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Space } from 'antd';
import store from '../store/numberStatus/index';

export default function Page1() {
  const dispatch = useDispatch();
  const { num } = useSelector((state: RootState) => ({
    num: state.handleNum.num,
  }));

  const add = () => {
    dispatch({
      type: 'add1',
      value: 1,
    });
  };

  const reduce = () => {
    dispatch(store.asyncActions.asyncAdd1);
  };
  return (
    <div>
      Page1={num}
      <Space>
        <Button type='primary' onClick={add}>
          add1
        </Button>
        <Button type='primary' onClick={reduce}>
          add2
        </Button>
      </Space>
    </div>
  );
}
