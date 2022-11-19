import request from './index';

// 验证码请求
export const captchaAPI = (): Promise<CaptchAPIRes> => request.get('/prod-api/captchImage');

// 登录验证
export const loginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> => request.post('/prod-api/login', params);