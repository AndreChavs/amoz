import Container from '../../layout/container/Container'
const Hero = ({children,className}) => {
    return <section className={className}>
        <Container>
            {children}
        </Container>
    </section>
}

export default Hero