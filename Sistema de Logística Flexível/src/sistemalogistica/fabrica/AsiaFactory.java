package sistemalogistica.fabrica;

public class AsiaFactory extends TransporteRegionalFactory {
    @Override
    public TransporteFactory criarTransporteFactory() {
        return new AviaoFactory(); // Exemplo: apenas avião para a Ásia
    }
}
