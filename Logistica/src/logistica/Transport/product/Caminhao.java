package logistica.transport.product;

public class Caminhao extends Transport {
    private final double valorFretePorMilha;
    private final double freteMinimo;

    // Construtor
    public Caminhao() {
        super("caminhão"); 
        this.valorFretePorMilha = 10.0; 
        this.freteMinimo = 5.0; 
    }

    // Método para calcular o frete
    public double calcularFrete(double distancia) {
        System.out.println("Escolheu Caminhão");
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
