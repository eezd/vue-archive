interface ErrorMessages {
  default: string
  [key: number]: string // 添加数字索引签名
}

const errorMessages: ErrorMessages = {
  '400': '请求错误(400)',
  '401': '认证失败(401)',
  '403': '拒绝访问(403)',
  '404': '请求出错(404)',
  default: '系统未知错误，请反馈给管理员',
}

export default errorMessages
