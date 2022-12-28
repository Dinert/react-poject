import {Card, Form, Input, Checkbox, Button} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import './index.scss'

const onFinish = () => {}


function Login () {
  return (
    <div className='login'>
      <Card className='login-card'>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
                登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}


export default Login
