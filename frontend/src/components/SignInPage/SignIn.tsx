import React, {useState} from 'react';
import {useAtom} from 'jotai';
import {accountAtom} from '@stores/atoms/accountStore';
import * as k from '@components/SignInPage/style/SignInStyle';
import Header from '@common/Header';
import {getResult, prepareAuthRequest} from "@apis/kaikasApi";

const SignIn = () => {
    const [account, setAccount] = useAtom(accountAtom);
    const [requestKey, setRequestKey] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleRequest = async () => {
        try {
            const {request_key, status} = await prepareAuthRequest();
            if (status === 'prepared' && request_key) {
                setRequestKey(request_key)
                const url = `kaikas://wallet/api?request_key=${request_key}`;
                window.open(url, '_blank');
            } else {
                setErrorMessage('prepared 실패');
                console.error('Authentication failed');
            }

        } catch (error) {
            setErrorMessage('request post 실패');
            console.error('Error during authentication:', error);
        }
    };
    const handleResult = async () => {
        try {
            const result = await getResult(requestKey);
            if (result.status === 'completed' && result.result) {
                setAccount(result.result.klaytn_address);
            } else {
                setErrorMessage('result 실패');
            }
        } catch (error) {
            setErrorMessage('result get 실패');
            console.error('Error during authentication:', error);
        }
    };

    return (
        <k.SignInContainer onClick={e => e.stopPropagation()}>
            <Header title="로그인" isSearch={false} rightIconSrc={null}/>
            {requestKey ? requestKey : null}
            <br/>
            <br/>
            <br/>
            {account ? account.account : null}
            <br/>
            <br/>
            <br/>
            {errorMessage ? errorMessage : null}
            <br/>
            <br/>
            <br/>
            <k.SignInButton onClick={handleRequest}>
                Kaikas와 연동
            </k.SignInButton>
            <br/>
            <k.SignInButton onClick={handleResult}>
                Kaikas로 지갑주소 가져오기
            </k.SignInButton>
        </k.SignInContainer>
    );
};

export default SignIn;
