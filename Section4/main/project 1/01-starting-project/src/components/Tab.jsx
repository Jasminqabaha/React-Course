
export default function Tab({children,buttons,ButtonContainer = "menu"}){
    return(
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
        </>
    )

}