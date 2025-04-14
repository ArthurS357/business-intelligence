package strategy;
public class RotaTuristica implements RotaStrategy {
    public void construirRota(String origem, String destino) {
        System.out.println("Rota TURÍSTICA passando por pontos de interesse de " + origem + " até " + destino);
    }
}
