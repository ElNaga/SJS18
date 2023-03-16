import { Facebook, Instagram, LocationOn, Mail, Phone, Twitter } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`

const Logo = styled.h1`
    
`
const Desc  = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center ;
    gap: 10px;
`

const Payment = styled.img`
    width: 50%;
`

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Alek.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam reiciendis dolore veniam iste neque necessitatibus culpa optio, similique repellat?
            </Desc>
            <SocialContainer>
                <SocialIcon color="c3c4c2">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="c3c4c2">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="c3c4c2">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mans Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact:
            </Title>
            <ContactItem>
                <LocationOn/>
                    622 Dixie Path, South Tobinchester 98336
                
            </ContactItem>
            <ContactItem>
                <Phone/>
                    +1 234 56 78
            </ContactItem>
            <ContactItem>
                <Mail/>
                    contact@lama.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png/"/>
        </Right>
    </Container>
  )
}
