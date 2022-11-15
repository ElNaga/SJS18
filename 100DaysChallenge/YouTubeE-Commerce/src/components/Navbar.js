import styled from "styled-components"

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
`

export const Navbar = () => {


    return (
        <Container className="navbar-container">
            <Wrapper>
                Navbar
            </Wrapper>
        </Container>
    )
}