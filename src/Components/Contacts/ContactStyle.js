import styled, { css } from "styled-components";

export const ContactSectionContainer = styled.div`
  width: 100%;
  align-items: center;
  background: var(--primary-color);
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 8px;

  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const ContactSectionContentBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 80%;
    margin-bottom: 32px;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .send-confimation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .send-confimation-message {
    font-size: var(--body-md);
    font-family: var(--Body-font-family);
    font-weight: var(--body-regular-weight);
    line-height: 130%;
    color: var(--body-text-color);
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
    background-color: var(--light-layer);
    border-radius: 4px;
    border: 2px solid var(--primary-color);
    padding: 8px;
    @media only screen and (min-width: 1024px) {
      width: 50%;
    }
  }
`;
export const ContactSectionFormContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const ContactSectionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 100%;
  height: 180px;
  /* border: 1px solid red; */

  label {
    font-size: var(--body-md);
    font-family: var(--Body-font-family);
    font-weight: var(--body-semi-bold-weight);
    line-height: 130%;
    color: var(--primary-white);
    margin-bottom: 8px;
  }
  input {
    min-width: 300px;
    height: 48px;
    border-radius: 8px;
    padding: 16px;

    border: 1px solid var(--primary-basic-grey);
    &:hover {
      border: 1px solid var(--primary-color);
    }
    &:focus {
      border: 1px solid var(--primary-color);
      box-shadow: var(--primary-color);
    }
    ${(props) =>
      props.usererror &&
      css`
        border: 1px solid var(--error-color);
      `}
    @media only screen and (min-width: 1024px) {
      min-width: 400px;
    }
  }
  ${(props) =>
    props.fitsize &&
    css`
      height: fit-content;
    `}

  select {
    min-width: 100%;
    height: 48px;
    border-radius: 8px;
    padding: 8px 16px;

    &::before {
      content: "heree" !important;
      color: #000000;
    }
    border: 1px solid var(--primary-basic-grey);
    &:hover {
      border: 1px solid var(--primary-color);
    }
    &:focus {
      border: 1px solid var(--primary-color);
      box-shadow: var(--primary-color);
    }
    ${(props) =>
      props.usererror &&
      css`
        border: 1px solid var(--error-color);
      `}
    @media only screen and (min-width: 1024px) {
      min-width: 100%;
    }
  }
  .name-input {
    margin-bottom: 16px;
  }
  textarea {
    min-width: 300px;
    border-radius: 8px;
    padding: 16px;
    height: 100%;
    margin-top: 16px;
    position: relative;
    border: 1px solid var(--primary-basic-grey);
    &:hover {
      border: 1px solid var(--primary-color);
    }
    &:focus {
      border: 1px solid var(--primary-color);
      box-shadow: var(--primary-color);
    }
    ${(props) =>
      props.usererror &&
      css`
        border: 1px solid var(--error-color);
      `}

    @media only screen and (min-width: 1024px) {
      min-width: 400px;
      margin-top: 0px;
    }
  }
  ${(props) =>
    props.formmargin &&
    css`
      margin-top: 100px;
      @media only screen and (min-width: 1024px) {
        margin-top: 0;
        margin-left: 24px;
      }
    `}
`;

export const ContactSectionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    height: 50px;
    padding: 16px;
    width: 280px !important;
    text-transform: uppercase;
    border-radius: 6px;
    font-size: var(--body-md) !important;
    font-family: var(--Body-font-family) !important;
    font-weight: var(--body-semi-bold-weight) !important;
    line-height: 130% !important;
    margin: 0 auto !important;
    text-align: center !important;
    background-color: var(--primary-white) !important;
    color: var(--primary-color) !important;

    @media only screen and (min-width: 1024px) {
      width: 396px !important;
      margin-top: 64px;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 64px;
  }
`;
export const SectionHeaderKeyWord = styled.span`
  color: var(--primary-color);
  ${(props) =>
    props.darkmodeprimcolor &&
    css`
      color: var(--primary-light-gradient-color);
    `}
`;
export const SectionHeader = styled.div`
  font-size: var(--header-sm);
  font-family: var(--Header-font-family);
  line-height: 130%;
  font-weight: var(--header-weight);
  color: var(--primary-white);
  margin-bottom: 8px;
  text-align: center;
  width: 100%;
  padding: 0 8px;

  ${(props) =>
    props.headerblackcolor &&
    css`
      color: var(--header-text-color);
    `}
  @media only screen and (min-width: 1024px) {
    font-size: var(--header-lg);
    width: 60%;
    padding: 0;
    ${(props) =>
      props.headerwidth &&
      css`
        width: 80%;
      `}
  }
`;
export const SectionDescription = styled.div`
  font-size: var(--body-lg);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--body-regular-weight);
  color: var(--primary-white);
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
  ${(props) =>
    props.descriptionblackcolor &&
    css`
      color: var(--header-text-color);
    `}
  @media only screen and (min-width: 1024px) {
    font-size: var(--body-xl);
    width: 70%;
  }
`;
