package sistemalogistica.fabrica;

import sistemalogistica.transporte.Caminhao;
import sistemalogistica.transporte.Transporte;

public class CaminhaoFactory extends TransporteFactory {
    @Override
    public Transporte criarTransporte() {
        return new Caminhao();
    }
}
