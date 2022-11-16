import styled from "styled-components"

export const Announcement = () => {

    const Container = styled.div`
        height: 30px;
        background-color: teal;
        color: white;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-weight: bolder;
    `


    return (
        <Container>
            Super Deal! Free shiping on orders over $50!
        </Container>
    )
}