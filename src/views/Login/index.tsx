import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Input, Space } from 'antd';

import initLoginBg from './init.ts';
import styles from './index.module.scss';
import './index.less';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  const getUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value.trim());
  };
  const getPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };
  const getCaptcha = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptcha(e.target.value.trim());
  };

  const submit = () => {};

  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id='canvas' style={{ display: 'block' }}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox + ' loginbox'}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>前端乐哥&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className='form'>
          <Space direction='vertical' size='large' style={{ display: 'flex' }}>
            <Input placeholder='用户名' onChange={getUsername} />
            <Input.Password placeholder='密码' onChange={getPassword} />
            <div className='captchaBox'>
              <Input placeholder='验证码' onChange={getCaptcha} />
              <div className='captchaImg'>
                <img height='38' src='' alt='' />
              </div>
            </div>
            <Button type='primary' block className='btnLogin' onClick={submit}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
