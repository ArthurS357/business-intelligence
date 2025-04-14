package navigator;

import strategy.RotaStrategy;

public class Navegador {
    private RotaStrategy estrategia;

    // Método para definir a estratégia de rota
    public void setEstrategia(RotaStrategy estrategia) {
        this.estrategia = estrategia;
    }

    // Método para construir a rota com base na estratégia definida
    public void construirRota(String origem, String destino) {
        if (estrategia == null) {
            System.out.println("Nenhuma estratégia definida.");
        } else {
            estrategia.construirRota(origem, destino);
        }
    }
}
