import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {

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
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="errorMessageWrap">
                    올바른 이메일 양식을 입력해주세요.
                </div>

                <br />

                <div class="inputTitle">비밀번호</div>
                <div class="inputWrap">
                    <input class="input" type="password" placeholder="영문, 숫자, 특수문자 포함 6자 이상"></input>
                </div>
                <div className="errorMessageWrap">
                    영문, 숫자, 특수문자 포함 6자 이상 입력해주세요.
                </div>
            </div>

            <div>
                <button disabled={true} class="bottomButton">로그인</button>
            </div>

        </div>
    )
}