package logistica;

import java.util.Scanner;
import logistica.Factory.LogisticaFactory;
import logistica.Factory.TipoTransporte;
import logistica.transport.product.Transport;

public class Logistica {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Escolha o tipo de transporte:");
        System.out.println("1 - Avião");
        System.out.println("2 - Caminhão");
        
        int escolha = scanner.nextInt();
        TipoTransporte tipoTransporte;

        // Determina o tipo de transporte com base na escolha do usuário
        switch (escolha) {
            case 1:
                tipoTransporte = TipoTransporte.AVIAO;
                break;
            case 2:
                tipoTransporte = TipoTransporte.CAMINHAO;
                break;
            default:
                System.out.println("Escolha inválida. Encerrando o programa.");
                scanner.close();
                return; // Encerra o programa se a escolha for inválida
        }

        // Solicita a distância para o cálculo do frete
        System.out.print("Digite a distância (em milhas): ");
        double distancia = scanner.nextDouble();

        // Gera o transporte usando a fábrica
        Transport transporte = LogisticaFactory.generateTransport(tipoTransporte);
        transporte.entregar(); // Chama o método entregar

        // Calcula e exibe o frete
        double frete = transporte.calcularFrete(distancia);
        System.out.println("Frete calculado: R$" + frete);

        scanner.close(); // Fecha o scanner
    }
}
