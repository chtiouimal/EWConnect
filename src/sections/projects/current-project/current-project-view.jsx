import { Button, Form, Input, Select, Upload } from "antd";
import { CustomButton } from "../../../componenets";
import { InboxIcon, UploadCloudIcon, UploadIcon } from "lucide-react";
import { useState } from "react";
const { TextArea } = Input;

function CurrentProjectView() {
  const SECTORS = [
    "AI, Fintech & Smart Technologies",
    "Trade & Manufacturing",
    "Healthcare",
    "Oil & Gas",
    "Renewable Energy & Sustainable Development",
    "Real Estate, Hospitality & Tourism",
    "Construction & Infrastructure",
    "Aviation & Space Exploration",
    "Sport Industry",
  ];

  const onFinish = async (values) => {
    console.log("Form Data to submit:", values);
    const formData = new FormData();

    // Append all the form fields
    formData.append("personalName", values.personalName);
    formData.append("currentRole", values.currentRole);
    formData.append("companyName", values.companyName);
    formData.append("sector", values.sector);
    formData.append("interestsSevices", values.interestsSevices);
    formData.append("types", values.types);

    // Append the file (if available)
    if (fileList.length > 0) {
      formData.append("file", fileList[0].originFileObj);
    }

    // Send the form data
    fetch("https://formspree.io/f/mjkwkany", {
      // Replace 'abc123' with your actual Form ID
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        message.success("Form submitted successfully");
        console.log("Form Submitted:", data);
      })
      .catch((error) => {
        message.error("Error submitting form");
        console.error("Error:", error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (info) => {
    setFileList(info.fileList);
  };

  return (
    <div className="ew-view">
      <section style={{ paddingTop: 160, paddingBottom: 64 }}>
        <span className="ew-special-key">August 24th - August 29th,2025</span>
        <h3 style={{ marginTop: 16, fontSize: 64 }}>
          Strategic GCC Business Delegation: An Unprecedented Multinational
          Mission to the UAE, Saudi Arabia and Qatar
        </h3>
      </section>
      <div className="ew-full-img">
        <div>
          <img src="/meeting.jpg" alt="meeting" />
        </div>
      </div>

      <section>
        <span>Executive brief summary</span>
        <div
          className="ew-splited ew-info-text"
          style={{ marginTop: 16, marginBottom: 64 }}
        >
          <div style={{ maxWidth: "48%" }}>
            <p>
              The Chinese Business delegation to the Gulf Cooperation Council
              (GCC) is a distinctive initiative aimed at connecting high-ranking
              Chinese business executives with the most influential
              decision-makers in the GCC area.
            </p>
            <p>
              We focus on organizing a strategic business trip that offer
              participants exceptional access to key industries, government
              officials, and investment opportunities in Qatar, the UAE, and
              Saudi Arabia.
            </p>
          </div>
          <div style={{ maxWidth: "48%" }}>
            <p>
              Our primary objectives to promote meaningful partnerships by
              connecting Chinese enterprises with influential partners, and
              government-supported projects.{" "}
            </p>
            <p>
              This initiative targets CEOs, founders, decision-makers, and
              investors in China who wish to broaden their business presence and
              explore profitable investment opportunities in one of the world's
              most rapidly growing economic regions.{" "}
            </p>
          </div>
        </div>
      </section>

      <div
        className="ew-image-text ew-image-text-bg-blue"
        style={{ margin: "0 32px", borderRadius: 34 }}
      >
        <div className="ew-image">
          <img src="/delegation.jpg" alt="delegation" />
        </div>
        <div className="ew-text">
          <h3>Investment and Collaboration Mission</h3>
          <p>
            Over six highly strategic days, participants will experience a
            carefully structured program of meetings, forums, and private
            engagements designed to foster bilateral cooperation, unlock
            investment channels, and build long-term partnerships in one of the
            most globally influential regions.
          </p>
        </div>
      </div>

      <section>
        <p>
          We are honored to extend a prestigious invitation to join an
          exclusive, high-level business delegation to the Gulf Cooperation
          Council (GCC) region,a trip unlike any before.
        </p>
        <div className="ew-splited">
          <Form
            style={{ marginLeft: "auto", marginTop: 64 }}
            name="EWConnect"
            action="https://formspree.io/f/mjkwkany" // Replace with your Formspree URL
            method="POST"
            encType="multipart/form-data"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="personalName"
              rules={[
                {
                  required: true,
                  message: "Please input your personal name!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 16px)",
                marginBottom: 43,
              }}
            >
              <Input className="ew-input" placeholder="Personal name" />
            </Form.Item>
            <Form.Item
              name="currentRole"
              rules={[
                { required: true, message: "Please input your current role!" },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 16px)",
                marginLeft: 32,
                marginBottom: 43,
              }}
            >
              <Input className="ew-input" placeholder="Current role" />
            </Form.Item>
            <Form.Item
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Please input your company name!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 16px)",
                marginBottom: 43,
              }}
            >
              <Input className="ew-input" placeholder="Company name" />
            </Form.Item>
            <Form.Item
              name="sector"
              rules={[
                {
                  required: true,
                  message: "Please select your current sector!",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 16px)",
                marginLeft: 32,
                marginBottom: 43,
              }}
            >
              <Select
                className="ew-select"
                placeholder="Select your sector"
                style={{ marginBottom: 6 }}
              >
                {SECTORS.map((sector) => (
                  <Select.Option value={sector}>{sector}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            {/* <Form.Item
              name="file"
              valuePropName="fileList"
              getValueFromEvent={(e) => e && e.fileList}
              // extra="Upload your profile photo (optional)"
              style={{ marginBottom: 43, width: "50%" }}
            >
              <Upload.Dragger
                beforeUpload={() => false} // Prevent auto-uploading when file is selected
                onChange={handleFileChange}
                fileList={fileList}
                showUploadList={true}
              >
                <p className="ant-upload-drag-icon">
                  <UploadCloudIcon color="#26b49a" size={48} />
                </p>
                <p className="ant-upload-text">
                  Drop your files here or <span>Browse</span>
                </p>
              </Upload.Dragger>
            </Form.Item> */}
            <Form.Item
              name="interestsSevices"
              style={{ marginBottom: 43 }}
              rules={[
                {
                  required: true,
                  message: "Please input your interests!",
                },
              ]}
            >
              <TextArea
                className="ew-input"
                placeholder="Interests Sevices"
                rows={4}
              />
            </Form.Item>
            <Form.Item
              name="types"
              style={{ marginBottom: 43 }}
              rules={[
                {
                  required: true,
                  message: "Please input your types!",
                },
              ]}
            >
              <TextArea
                className="ew-input"
                placeholder="The types of partnerships or collaborations you seek"
                rows={4}
              />
            </Form.Item>
            <Form.Item label={null}>
              <CustomButton label="send" primary type="submit" />
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default CurrentProjectView;
