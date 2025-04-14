package app.navegacao.strategy;

import navigator.Navegador;
import strategy.*;

import java.util.Scanner; 

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); 
        Navegador navegador = new Navegador(); 
        
        System.out.println("Guia Turistico:");
        System.out.println("1 - Rota de carro");
        System.out.println("2 - Rota a pe");
        System.out.println("3 - Rota de onibus");
        System.out.println("4 - Rota Turistica");
        
        int escolha = scanner.nextInt(); 

        switch (escolha) {
            case 1:
                navegador.setEstrategia(new RotaCarro());
                navegador.construirRota("Avenida Paulista", "Praca da Se");
                break;
            case 2:
                navegador.setEstrategia(new RotaAPe());
                navegador.construirRota("Parque Ibirapuera", "Estadio do Morumbi");
                break;
            case 3:
                navegador.setEstrategia(new RotaOnibus());
                navegador.construirRota("Rodoviaria", "Museu do Ipiranga");
                break;
            case 4:
                navegador.setEstrategia(new RotaTuristica());
                navegador.construirRota("Rodoviaria", "Museu do Ipiranga");
                break;
            default:
                System.out.println("Escolha inválida. Por favor, selecione uma opção válida.");
                break;
        }

        scanner.close(); 
    }
}
