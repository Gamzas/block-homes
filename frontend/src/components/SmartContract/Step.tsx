import React from 'react'
import { StepCard, StepContainer } from './style/StepStyle'

type Props = {currentindex:number}

const Step = (props: Props) => {
    const steps=[
        {name:'정보동의'},
        {name:'계약서 작성'},
        {name:'계약금 송금'}
    ]
  return (
        <StepContainer>
            {steps.map((step,index)=>(
                <div key={index} className='step-div'>
                    <StepCard>
                        { index === props.currentindex ?   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM22.5893 10.5893C22.9147 10.2638 22.9147 9.73618 22.5893 9.41074C22.2638 9.08531 21.7362 9.08531 21.4107 9.41074L12 18.8215L7.58926 14.4107C7.26382 14.0853 6.73618 14.0853 6.41074 14.4107C6.08531 14.7362 6.08531 15.2638 6.41074 15.5893L11.4107 20.5893C11.7362 20.9147 12.2638 20.9147 12.5893 20.5893L22.5893 10.5893Z" fill="#845BD3"/>
                        </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
                        <text x="50%" y="50%" text-anchor="middle" fill="#FFF" dy=".3em" font-size="10px" >{index+1}</text>
                        </svg>
                        }
                    { index === props.currentindex ? <div className='step-current-text'>{step.name}</div>:<div className='step-text'>{step.name}</div>}
                    </StepCard>
                    {index<steps.length -1 && <div className='line'/>}
                </div>
            ))}
        </StepContainer>
  )
}

export default Step