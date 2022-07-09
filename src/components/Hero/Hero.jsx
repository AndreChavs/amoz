import ContainerFlex from '../../layout/container/ContainerFlex'
const Hero = ({children,className}) => {
    return <section className={className}>
        <ContainerFlex>
            {children}
        </ContainerFlex>
    </section>
}

export default Hero