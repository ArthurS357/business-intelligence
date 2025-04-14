package logistica.transport.product;
public abstract class Transport {
    private String tipo;

    public Transport(String tipo) {
        this.tipo = tipo;
    }

    public abstract double calcularFrete(double distancia);

    public void entregar() {
        System.out.println("Entregando por " + tipo);
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
