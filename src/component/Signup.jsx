import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// eslint-disable-next-line
import { async } from "@firebase/util";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
        if (emailValid && passwordValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, passwordValid]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        // eslint-disable-next-line
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // eslint-disable-next-line
        const regex = /^(?=.*[0-9]).{6,20}$/;
        if (regex.test(e.target.value)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    };

    // eslint-disable-next-line
    const onClickConfirmButton = () => {

    }

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
        })
        // eslint-disable-next-line
    }, []);

    const signup = async () => {
        // eslint-disable-next-line
        const result = await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert(`${email}님이 회원가입에 성공했습니다.`);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`${email}님이 회원가입에 실패했습니다.\n사유: [${errorCode}] ${errorMessage}`);
                console.log(error);
            });
    }

    return (
        <div className="page">
            <div class="titleWrap">
                이메일과 비밀번호를<br />
                입력해주세요
            </div>

            <div class="contentWrap">
                <div class="inputTitle">이메일</div>
                <div class="inputWrap">
                    <input
                        class="input" type="text" placeholder="test@domain.com"
                        value={email} onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일 양식을 입력해주세요.</div>
                    )}
                </div>

                <br />

                <div class="inputTitle">비밀번호</div>
                <div class="inputWrap">
                    <input
                        class="input" type="password" placeholder="6자 이상"
                        value={password} onChange={handlePassword}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!passwordValid && password.length > 0 && (
                        <div>6자 이상 입력해주세요.</div>
                    )}

                </div>
            </div>

            <div>
                <button onClick={signup} disabled={notAllow} class="bottomButton">회원가입</button>
            </div>

        </div>
    )
}