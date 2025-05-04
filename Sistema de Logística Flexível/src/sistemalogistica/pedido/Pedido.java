package sistemalogistica.pedido;

import sistemalogistica.transporte.Transporte;
import sistemalogistica.estrategia.EstrategiaEntrega;

import java.util.Optional;

public class Pedido implements Cloneable {
    private String nome;
    private Transporte transporte;
    private EstrategiaEntrega estrategiaEntrega;

    public Pedido(String nome, Transporte transporte, EstrategiaEntrega estrategiaEntrega) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("O nome do pedido não pode ser nulo ou vazio.");
        }
        this.nome = nome;
        this.transporte = transporte;
        this.estrategiaEntrega = estrategiaEntrega;
    }

    public void setTransporte(Transporte transporte) {
        this.transporte = transporte;
    }

    public void setEstrategiaEntrega(EstrategiaEntrega estrategiaEntrega) {
        this.estrategiaEntrega = estrategiaEntrega;
    }

    public void entregar() {
        Optional.ofNullable(transporte)
                .ifPresentOrElse(
                        t -> t.entregar(nome),
                        () -> System.out.println("Nenhum transporte definido para o pedido: " + nome)
                );
    }

    public void calcularTempoEntrega() {
        Optional.ofNullable(estrategiaEntrega)
                .ifPresentOrElse(
                        estrategia -> estrategia.entregar(nome),
                        () -> System.out.println("Nenhuma estratégia de entrega definida para o pedido: " + nome)
                );
    }

    @Override
    public Pedido clone() throws CloneNotSupportedException {
        Pedido cloned = (Pedido) super.clone();
        // Para caso a Transporte e EstrategiaEntrega implementarem Cloneable
        // cloned.transporte = (Transporte) this.transporte.clone();
        // cloned.estrategiaEntrega = (EstrategiaEntrega) this.estrategiaEntrega.clone();
        return cloned;
    }
}
