import { Form, Input } from "antd";
import { CustomButton } from "../../componenets";
const { TextArea } = Input;

function ContactView() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="ew-view">
      <section className="ew-contact-hero" style={{ paddingBottom: 0 }}>
        <div className="ew-splited" style={{ marginTop: 32, marginBottom: 64 }}>
          <h3>Let’s discuss how we can help your business grow.</h3>
          <Form
            name="contact"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              //   label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 16px)",
                marginBottom: 43,
              }}
            >
              <Input className="ew-input" placeholder="Name" />
            </Form.Item>
            <Form.Item
              //   label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 16px)",
                marginLeft: 32,
                marginBottom: 43,
              }}
            >
              <Input className="ew-input" placeholder="Email" />
            </Form.Item>
            <Form.Item
              //   label="Object"
              name="object"
              style={{ marginBottom: 43 }}
              rules={[{ required: true, message: "Please input your object!" }]}
            >
              <Input className="ew-input" placeholder="Object" />
            </Form.Item>
            <Form.Item
              //   label="Message"
              name="message"
              style={{ marginBottom: 43 }}
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <TextArea className="ew-input" placeholder="Message" rows={4} />
              {/* <Input className="ew-input" placeholder="Message" /> */}
            </Form.Item>
            <Form.Item label={null}>
              <CustomButton label="send" primary type="submit" />
            </Form.Item>
          </Form>
        </div>
        <div className="ew-splited" style={{ marginTop: 32, marginBottom: 64 }}>
          <p className="ew-first-p">
            Contact us today, and let’s build something great together.
          </p>
          <ul className="ew-contact-list">
            <li>
              <span>Email</span>
              <a>Info@eastwind-connect.com</a>
            </li>
            <li>
              <span>.</span>
              <a>Ines.djibet@china-eastwind.com</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ContactView;
