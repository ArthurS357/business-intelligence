package sistemalogistica.estrategia;

public class EntregaExpressa implements EstrategiaEntrega {
    @Override
    public void entregar(String pacote) {
        System.out.println("Entrega expressa do pacote: " + pacote);
    }
}
