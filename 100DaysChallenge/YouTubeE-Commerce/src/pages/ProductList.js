import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Newsletter } from "../components/Newsletter"
import { Products } from "../components/Products"


const Container = styled.div`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`

const Title = styled.h1`
    margin: 20px;
`

export const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter 1
                </FilterText>
            </Filter>
            <Filter>
                <FilterText>
                    Filter 2
                </FilterText>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
