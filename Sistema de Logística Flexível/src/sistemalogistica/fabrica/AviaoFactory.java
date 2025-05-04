package sistemalogistica.fabrica;

import sistemalogistica.transporte.Aviao;
import sistemalogistica.transporte.Transporte;

public class AviaoFactory extends TransporteFactory {
    @Override
    public Transporte criarTransporte() {
        return new Aviao();
    }
}
