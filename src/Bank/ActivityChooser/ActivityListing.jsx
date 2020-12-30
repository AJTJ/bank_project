import React from "react";
import styled from "styled-components";
import { activitiesEnums } from "../enums";
import { ActButton as ActButtonImport } from "../Shared/Layout";

const ActSectionHeader = styled.h2`
  font-size: 20px;
`;

const ActWrapper = styled.div`
  background: grey;
`;

const ActTitle = styled.div`
  font-size: 18px;
`;

const ActButton = ({ activity, children, closeModal, setCurrentActivity }) => (
  <ActButtonImport
    onClick={() => {
      setCurrentActivity(activity);
      closeModal();
    }}
  >
    {children}
  </ActButtonImport>
);

const Activity = ({ closeModal, setCurrentActivity, activity, title }) => (
  <ActWrapper>
    <ActTitle>{title}</ActTitle>
    <ActButton {...{ closeModal, setCurrentActivity, activity }}>
      Start
    </ActButton>
  </ActWrapper>
);

export const ActivityList = ({ closeModal, setCurrentActivity }) => {
  return (
    <>
      <ActSectionHeader>Accessing Your Account</ActSectionHeader>
      <Activity
        title={"Signing In"}
        activity={activitiesEnums.SIGNIN}
        {...{ closeModal, setCurrentActivity }}
      />
      <ActSectionHeader>Accounts</ActSectionHeader>
      <Activity
        title={"Online Account Overview"}
        activity={activitiesEnums.ACCOUNTOVERVIEW}
        {...{ closeModal, setCurrentActivity }}
      />
      <ActSectionHeader>Making Payments</ActSectionHeader>
      <Activity
        title={"Pay a new company for the first time"}
        activity={activitiesEnums.MAKINGPAYMENTS}
        {...{ closeModal, setCurrentActivity }}
      />
    </>
  );
};
