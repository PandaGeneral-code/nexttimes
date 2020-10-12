import { Form } from "antd";
import React from "react";

import { useAppHooks } from "../context/AppHooks";
import Wrapper, {
  ButtonWrapper,
  StyledDrawer,
  StyledInput,
  StyledTextArea,
} from "./styled";

export const ContactDrawer = () => {
  const {
    setDrawerVisibility,
    state: { drawerVisibility },
  } = useAppHooks();
  const [contactUsForm] = Form.useForm();

  const handleContactDrawerClose = () => {
    setDrawerVisibility({ contact: false });
  };

  return (
    <StyledDrawer
      height="100%"
      onClose={handleContactDrawerClose}
      placement="bottom"
      visible={drawerVisibility.contact}
    >
      <Wrapper>
        <h1>Let us help you grow your business</h1>
        <p>
          Wherever you want to take your business we can find solutions for you
          within your budget.
        </p>
        <p>
          For a quick chat about your needs then call Darrell on{" "}
          <a href="tel:0411572926">0411 572 926</a>.
        </p>
        <Form autoComplete="off" form={contactUsForm}>
          <Form.Item name="name" noStyle>
            <StyledInput placeholder="NAME" />
          </Form.Item>
          <Form.Item name="emailAddress" noStyle>
            <StyledInput placeholder="EMAIL ADDRESS" />
          </Form.Item>
          <Form.Item name="businessName" noStyle>
            <StyledInput placeholder="BUSINESS NAME" />
          </Form.Item>
          <Form.Item name="phone" noStyle>
            <StyledInput placeholder="PHONE" />
          </Form.Item>
          <Form.Item>
            <StyledTextArea
              autoSize={{ maxRows: 4, minRows: 4 }}
              placeholder="MESSAGE"
            />
          </Form.Item>
          <ButtonWrapper>
            <button>SUBMIT</button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </StyledDrawer>
  );
};
