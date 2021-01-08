import React, { useState, useEffect } from "react";
import { MarginedContainer } from "../../Shared/Layout";
import {
  BankingBackground,
  BankingHeader,
  BankingContainer,
  CleanBackground,
  BankingFooter,
} from "../../Shared/BankPages";
import IntroOutro from "../../IntroOutro";
import Checking from "./Checking";
import AllAccounts from "./AllAccounts";

// ALL STEPS
const check = "check";
const balance = "balance";
const accountInfo = "accountInfo";
const hold = "hold";
const overdraft = "overdraft";
const available = "available";
const institution = "institution";
const transit = "transit";
const accountNumber = "accountNumber";
const transactions = "transactions";
const wellRead = "wellRead";
const taco = "taco";
const internetDeposit = "internetDeposit";
const preAuth = "preAuth";
const totalDebits = "totalDebits";
const credits = "credits";
const creditsDebits = "creditsDebits";

// All steps array for sequence
const allSteps = [
  check,
  balance,
  accountInfo,
  hold,
  overdraft,
  available,
  institution,
  transit,
  accountNumber,
  transactions,
  wellRead,
  taco,
  internetDeposit,
  preAuth,
  totalDebits,
  credits,
  creditsDebits,
];

const checkingTransactions = "checkingTransactions";
const checkingInformation = "checkingInformation";

const Overview = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [checkingService, setCheckingService] = useState(checkingTransactions);
  // const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    if (step === allSteps.length) {
      setStep(step + 1);
      setIsIntro(false);
      setIntroOutroVisible(true);
    }
  }, [step]);

  return (
    <BankingBackground>
      <BankingHeader />
      <CleanBackground>
        <MarginedContainer>
          <BankingContainer>
            {isChecking ? (
              <Checking
                {...{
                  step,
                  setStep,
                  allSteps,
                  transactions,
                  wellRead,
                  taco,
                  internetDeposit,
                  preAuth,
                  totalDebits,
                  credits,
                  creditsDebits,
                  hold,
                  overdraft,
                  available,
                  institution,
                  transit,
                  accountNumber,
                  setCheckingService,
                  checkingTransactions,
                  accountInfo,
                  checkingInformation,
                  checkingService,
                  balance,
                }}
              />
            ) : (
              <AllAccounts
                {...{ allSteps, step, check, setIsChecking, setStep }}
              />
            )}
          </BankingContainer>

          <IntroOutro
            closeModal={() => setIntroOutroVisible(false)}
            endExercise={() => returnToAllActivities()}
            currentActivity={currentActivity}
            visible={introOutroVisible}
            isIntro={isIntro}
          />
        </MarginedContainer>
      </CleanBackground>
      <BankingFooter />
    </BankingBackground>
  );
};

export default Overview;
