package sistemalogistica.estrategia;

public class EntregaAgendada implements EstrategiaEntrega {
    @Override
    public void entregar(String pacote) {
        System.out.println("Entrega agendada do pacote: " + pacote);
    }
}
