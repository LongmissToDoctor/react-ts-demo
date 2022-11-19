interface CaptchAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}

interface LoginAPIReq {
  username: string;
  password: string;
  code: string;
  uuid: string
}

interface LoginAPIRes {
  msg: string;
  code: number;
  token: string
}