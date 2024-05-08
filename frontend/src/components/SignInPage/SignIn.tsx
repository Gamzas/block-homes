import React from 'react';
import {useAtom} from 'jotai';
import {accountAtom} from '@stores/atoms/accountStore';
import * as k from '@components/SignInPage/style/SignInStyle';
import Header from '@common/Header';
import {getResult, prepareAuthRequest} from "@apis/kaikasApi";

const SignIn = () => {
    const [account, setAccount] = useAtom(accountAtom);

    const handleAuth = async () => {
        try {
            const {request_key} = await prepareAuthRequest();
            const url = `kaikas://wallet/browser?url=${encodeURIComponent('https://app.kaikas.io/u/block-homes.kr/signin')}`;
            window.open(url, '_blank');

            const result = await getResult(request_key);
            if (result.status === 'completed' && result.result) {
                setAccount(result.result.klaytn_address);
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    return (
        <k.SignInContainer onClick={e => e.stopPropagation()}>
            <Header title="로그인" isSearch={false} rightIconSrc={null}/>
            {account ? account.account : null}
            <k.SignInButton onClick={handleAuth}>
                <div className="symbol"/>
                Kaikas로 로그인
            </k.SignInButton>
        </k.SignInContainer>
    );
};

export default SignIn;
