package strategy;

public class RotaCarro implements RotaStrategy {
    @Override
    public void construirRota(String origem, String destino) {
        System.out.println("Construindo rota de carro de " + origem + " para " + destino);
    }
}
