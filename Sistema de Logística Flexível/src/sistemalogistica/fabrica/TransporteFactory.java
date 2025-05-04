package sistemalogistica.fabrica;

import sistemalogistica.transporte.Transporte;

public abstract class TransporteFactory {
    public abstract Transporte criarTransporte();

    public void entregarPacote(String pacote) {
        Transporte transporte = criarTransporte();
        transporte.entregar(pacote);
    }
}
