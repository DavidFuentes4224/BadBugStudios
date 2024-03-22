import { Form, Input, Button } from 'antd';
import { Separator } from '../templates/separator';
import{ init } from 'emailjs-com';
init("user_ucMeB39XE7h1D9QqH1S0a");

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string*/
  const validateMessages = {
    required: "'${Name}' is required!", 
    types: {
      email: "'${Email}' is not a valid email!",
    }
  };
  /* eslint-enable no-template-curly-in-string*/

export const ContactForm = () => {
    const onFinish = (values) => {
        const templateId = 'template_ldkur75';
        console.log(values.user);
        sendFeedback(templateId, {message: values.user.comments, from_name: values.user.name, reply_to: values.user.email})
      };
    
    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'service_x8p0i28', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

      return (
          <>
          <div className='backgroundStyle contact'>
            <Separator header="Contact"/>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'comments']} label="Comments">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        </>
      );
    }
