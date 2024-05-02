import * as a from "@components/RegistrateEstatePage/style/AccordionStyle";

const Accordion = ({title, children, isOpen, onToggle}) => {
    return (
        <a.AccordionContainer>
            <a.AccordionSummary onClick={onToggle}>
                <div className="title">{title}</div>
                <a.AccordionToggleIcon $isOpen={isOpen}/>
            </a.AccordionSummary>
            <a.AccordionDetails $isOpen={isOpen}>{children}</a.AccordionDetails>
        </a.AccordionContainer>
    );
};

export default Accordion;
