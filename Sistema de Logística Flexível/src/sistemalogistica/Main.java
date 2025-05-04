package sistemalogistica;

import sistemalogistica.fabrica.EuropaFactory;
import sistemalogistica.fabrica.TransporteRegionalFactory;
import sistemalogistica.estrategia.EntregaEconomica;
import sistemalogistica.estrategia.EntregaExpressa;
import sistemalogistica.pedido.Pedido;

public class Main {
    public static void main(String[] args) {
        TransporteRegionalFactory europaFactory = new EuropaFactory();
        sistemalogistica.transporte.Transporte transporte = europaFactory.criarTransporteFactory().criarTransporte();
        
        if (transporte == null) {
            System.out.println("Erro ao criar transporte.");
            return;
        }

        sistemalogistica.estrategia.EstrategiaEntrega estrategia = new EntregaEconomica();

        Pedido pedido = new Pedido("Pacote 123", transporte, estrategia);
        
        pedido.entregar();

        pedido.setEstrategiaEntrega(new EntregaExpressa());
        pedido.calcularTempoEntrega();

        // Clonar o pedido para simular uma segunda entrega
        try {
            Pedido pedidoClonado = (Pedido) pedido.clone();
            pedidoClonado.setTransporte(transporte); 
            pedidoClonado.entregar();
        } catch (CloneNotSupportedException e) {
            System.err.println("Erro ao clonar o pedido: " + e.getMessage());
        }
    }
}
