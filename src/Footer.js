import React from "react";
export class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    componentDidMount(){
        console.log('Conectando ao BD');
        
        setInterval(
            () => {this.atualizar();}
            , 2000
        );
    }

    atualizar(){
        this.setState(
            {
            dados: {ano: this.state.dados.ano + 1}
            }
        );
    }

    componentWillUnmount(){
        console.log('Desconectando do BD')
    }

    render(){
        return(
        <footer>
            <p>Copyrigth Recode {this.state.dados.mes}-{this.state.dados.ano}</p>
        </footer>
    );
    }
}

export function Left(){
    return(
        <Footer dados={ {ano: 1987, mes: 11} } />            
    );
}

//export default Footer;