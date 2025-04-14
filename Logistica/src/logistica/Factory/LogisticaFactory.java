package logistica.Factory;

import logistica.transport.product.Aviao;
import logistica.transport.product.Caminhao;
import logistica.transport.product.Transport;

// Enum para tipos de transporte
enum TipoTransporte {
    AVIAO,
    CAMINHAO
}

public class LogisticaFactory {
    public static Transport generateTransport(TipoTransporte tipo) {
        switch (tipo) {
            case AVIAO:
                return new Aviao();
            case CAMINHAO:
                return new Caminhao();
            default:
                throw new IllegalArgumentException("Tipo de transporte desconhecido: " + tipo);
        }
    }
}
