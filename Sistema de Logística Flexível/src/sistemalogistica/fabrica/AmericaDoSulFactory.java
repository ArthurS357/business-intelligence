package sistemalogistica.fabrica;

public class AmericaDoSulFactory extends TransporteRegionalFactory {
    @Override
    public TransporteFactory criarTransporteFactory() {
        return new CaminhaoFactory(); 
    }
}
