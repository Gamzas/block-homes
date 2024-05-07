import React from 'react';
import {useMutation} from '@tanstack/react-query';
import {useSetAtom} from 'jotai';
import {accountAtom} from '@stores/atoms/accountStore';
import * as k from '@components/SignInPage/style/SignInStyle';
import Header from '@common/Header';
import {authenticateWithKaikas} from '@apis/kaikasApi';
import {KaikasResponse} from "@/types/components/kaikas";

// API 응답 타입 정의, 실제 API 응답에 맞춰서

const SignIn = () => {
    const setAccount = useSetAtom(accountAtom);
    const {mutate, isLoading, error} = useMutation<KaikasResponse, Error>(authenticateWithKaikas, {
        onSuccess: (data) => {
            // 데이터에서 지갑 주소 추출 및 저장
            if (data.result && data.result.klaytn_address) {
                setAccount({account: data.result.klaytn_address});
            } else {
                console.error("No wallet address returned from Kaikas");
            }
        }
    });

    const handleLogin = () => {
        mutate();
    };

    return (
        <k.SignInContainer onClick={e => e.stopPropagation()}>
            <Header title="로그인" isSearch={false} rightIconSrc={null}/>
            <k.SignInButton onClick={handleLogin}>
                <div className="symbol"/>
                Kaikas로 로그인
            </k.SignInButton>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</div>}
        </k.SignInContainer>
    );
};

export default SignIn;
