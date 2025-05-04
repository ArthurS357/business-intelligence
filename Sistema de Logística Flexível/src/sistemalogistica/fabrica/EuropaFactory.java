package sistemalogistica.fabrica;

public class EuropaFactory extends TransporteRegionalFactory {
    @Override
    public TransporteFactory criarTransporteFactory() {
        return new NavioFactory(); // Exemplo: apenas navio para a Europa
    }
}
