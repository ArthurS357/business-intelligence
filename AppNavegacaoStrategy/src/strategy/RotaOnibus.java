
package strategy;

public class RotaOnibus implements RotaStrategy {
    public void construirRota(String origem, String destino) {
        System.out.println("Rota de ONIBUS de " + origem + " ate " + destino);
    }
}
