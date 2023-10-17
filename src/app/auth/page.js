"use client";
import {
	PhoneAuthProvider,
	RecaptchaVerifier,
	signInWithCredential,
	signInWithPhoneNumber,
} from "firebase/auth";
import { useEffect, useState } from "react";
import styles from "./auth.module.css";
import { auth } from "@/firebase/firebase";

const PhoneAuth = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [verificationId, setVerificationId] = useState("");

	const handleSendCode = () => {
		var recaptcha = new RecaptchaVerifier(
			"send-code-button",
			{
				size: "invisible",
				callback: (response) => {
					console.log(response);
				},
			},
			auth
		);
		signInWithPhoneNumber(phoneNumber, recaptcha)
			.then((verificationId) => {
				setVerificationId(verificationId);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleVerifyCode = () => {
		const credential = PhoneAuthProvider.credential(
			verificationId,
			verificationCode
		);

		signInWithCredential(credential)
			.then((userCredential) => {
				// User signed in successfully
				console.log(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className={styles.container}>
			<button id="recaptcha" />
			<h1> Sing Up </h1>
			<input
				type="tel"
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			<button id="send-code-button" onClick={handleSendCode}>
				Send Code
			</button>
			<input
				type="text"
				value={verificationCode}
				onChange={(e) => setVerificationCode(e.target.value)}
			/>
			<button onClick={handleVerifyCode}>Verify Code</button>
		</div>
	);
};

export default PhoneAuth;
