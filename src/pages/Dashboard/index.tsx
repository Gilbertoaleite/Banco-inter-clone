import { DashboardBackground, BodyContainer, InlineContainer, InlineTitle } from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Statement from './Statement';

const Dashboard = () => {

    const wallet = 10000.00

    return (
        <DashboardBackground>
            {/* AVISO DE SITE NÃO OFICIAL */ }
            <div style={ { background: '#ff9800', color: '#fff', padding: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.5px' } }>
                Atenção: Este site é um clone para fins educacionais e <u>não</u> é o site oficial do Banco Inter.
            </div>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className="wallet">
                                { wallet.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
                            </h3>
                        </InlineContainer>
                    </Card>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={ { flex: 1 } } />
                            <Button>Gerar código</Button>
                        </InlineContainer>

                        <p className="primary-color">Pix copia e cola:</p>
                        <p className="primary-color">asd10asd1asd1as4d1asd4</p>

                    </Card>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input />
                            <Button>Pagar PIX</Button>
                        </InlineContainer>
                    </Card>
                </div>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Extrato da conta</h2>
                        </InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard