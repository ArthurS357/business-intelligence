package sistemalogistica.fabrica;

import sistemalogistica.transporte.Navio;
import sistemalogistica.transporte.Transporte;

public class NavioFactory extends TransporteFactory {
    @Override
    public Transporte criarTransporte() {
        return new Navio();
    }
}
