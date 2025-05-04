package sistemalogistica.estrategia;

public class EntregaEconomica implements EstrategiaEntrega {
    @Override
    public void entregar(String pacote) {
        System.out.println("Entrega econômica do pacote: " + pacote);
    }
}
