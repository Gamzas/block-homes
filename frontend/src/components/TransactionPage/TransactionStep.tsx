import * as t from './style/TransactionStepStyle'

type Props = { currentindex: number }

const TransactionStep = (props: Props) => {
  const steps = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }]
  return (
    <t.StepContainer>
      {steps.map((step, index) => (
        <div key={index} className="step-div">
          <t.StepCard>
            {index === props.currentindex ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="pulse-animation"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="7"
                  fill="#845BD3"
                  stroke="#845BD3"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#845BD3"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="7.5"
                  stroke="#845BD3"
                  strokeWidth="2"
                />
              </svg>
            )}
            {index === props.currentindex ? (
              <div className="step-current-text">{step.name}</div>
            ) : (
              <div className="step-text">{step.name}</div>
            )}
          </t.StepCard>
          {index < steps.length - 1 && <div className="line" />}
        </div>
      ))}
    </t.StepContainer>
  )
}

export default TransactionStep
