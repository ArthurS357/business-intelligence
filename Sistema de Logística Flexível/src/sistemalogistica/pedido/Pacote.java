package sistemalogistica.pedido;

import sistemalogistica.estrategia.EstrategiaEntrega;

import java.util.Optional;

public class Pacote implements Cloneable {
    private String nome;
    private EstrategiaEntrega estrategiaEntrega;

    public Pacote(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("O nome do pacote não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public void setEstrategiaEntrega(EstrategiaEntrega estrategiaEntrega) {
        this.estrategiaEntrega = estrategiaEntrega;
    }

    public void entregar() {
        Optional.ofNullable(estrategiaEntrega)
                .ifPresentOrElse(
                        estrategia -> estrategia.entregar(nome),
                        () -> System.out.println("Nenhuma estratégia de entrega definida para o pacote: " + nome)
                );
    }

    @Override
    public Pacote clone() throws CloneNotSupportedException {
        Pacote cloned = (Pacote) super.clone();
        // Para caso a estratégia de entrega também precisar ser clonada
        // cloned.estrategiaEntrega = (EstrategiaEntrega) estrategiaEntrega.clone();
        return cloned;
    }

    @Override
    public String toString() {
        return "Pacote{" +
                "nome='" + nome + '\'' +
                '}';
    }
}
