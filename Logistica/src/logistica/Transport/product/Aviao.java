package logistica.transport.product;

public class Aviao extends Transport {
    private final double valorFretePorMilha;
    private final double freteMinimo;

    // Construtor
    public Aviao() {
        super("avião"); // Chama o construtor da classe base com o tipo
        this.valorFretePorMilha = 15.0; // Valor do frete por milha
        this.freteMinimo = 200.0; // Frete mínimo
    }

    // Método para calcular o frete
    public double calcularFrete(double distancia) {
        System.out.println("Escolheu Avião");
        double total = distancia * valorFretePorMilha;
        return Math.max(total, freteMinimo);
    }

    public double getValorFretePorMilha() {
        return valorFretePorMilha;
    }

    public double getFreteMinimo() {
        return freteMinimo;
    }
}
