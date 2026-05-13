import { Form, Input, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { init } from 'emailjs-com';
init("user_ucMeB39XE7h1D9QqH1S0a");

const layout = {
  labelCol:   { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "'${Name}' is required!",
  types: { email: "'${Email}' is not a valid email!" },
};
/* eslint-enable no-template-curly-in-string */

export const ContactForm = () => {
  const onFinish = (values) => {
    const templateId = 'template_ldkur75';
    sendFeedback(templateId, {
      message:   values.user.comments,
      from_name: values.user.name,
      reply_to:  values.user.email,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('service_x8p0i28', templateId, variables)
      .then(() => console.log('Email successfully sent!'))
      .catch(err => console.error('Email send failed:', err));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        <div className="contact-info">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Let's Connect</p>
          <h2 className="section-title light">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="contact-info-body">
            Whether you have a project in mind, a role to discuss, or questions
            about my work — I'm always open to new conversations. I'll respond promptly.
          </p>
          <div className="contact-links">
            <a
              href="https://github.com/DavidFuentes4224"
              className="contact-link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon"><GithubOutlined /></span>
              github.com/DavidFuentes4224
            </a>
            <a
              href="https://www.linkedin.com/in/david-fuentes-7aa01995/"
              className="contact-link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon"><LinkedinOutlined /></span>
              linkedin.com/in/david-fuentes
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <Form
            {...layout}
            name="contact-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[{ type: 'email' }]}
            >
              <Input placeholder="your@email.com" />
            </Form.Item>
            <Form.Item name={['user', 'comments']} label="Message">
              <Input.TextArea rows={4} placeholder="What's on your mind?" />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    </section>
  );
};
