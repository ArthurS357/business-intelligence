package sistemalogistica.transporte;

import sistemalogistica.transporte.Transporte;

public class Navio implements Transporte {
    @Override
    public void entregar(String pacote) {
        System.out.println("Entregando o pacote " + pacote + " por navio.");
    }
}
