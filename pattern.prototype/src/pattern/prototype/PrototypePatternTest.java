package pattern.prototype;

import java.util.List;
import java.util.Scanner;

public class PrototypePatternTest {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        EmployeeManager manager = new EmployeeManager();

        while (true) {
            System.out.println("\nEscolha uma opção:");
            System.out.println("1. Adicionar Funcionário");
            System.out.println("2. Remover Funcionário");
            System.out.println("3. Visualizar Funcionários");
            System.out.println("4. Clonar Funcionários");
            System.out.println("5. Sair");
            int choice;

            try {
                choice = Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Por favor, insira um número válido.");
                continue;
            }

            switch (choice) {
                case 1:
                    System.out.print("Digite o nome do funcionário a ser adicionado: ");
                    String nameToAdd = scanner.nextLine();
                    manager.addEmployee(nameToAdd);
                    System.out.println("Funcionário adicionado: " + nameToAdd);
                    break;
                case 2:
                    System.out.print("Digite o nome do funcionário a ser removido: ");
                    String nameToRemove = scanner.nextLine();
                    if (manager.removeEmployee(nameToRemove)) {
                        System.out.println("Funcionário removido: " + nameToRemove);
                    } else {
                        System.out.println("Funcionário não encontrado: " + nameToRemove);
                    }
                    break;
                case 3:
                    manager.displayEmployees();
                    break;
                case 4:
                    try {
                        Employees clonedEmployees = manager.cloneEmployees();
                        System.out.println("Lista de Funcionários Clonados: " + clonedEmployees.getEmpList());

                        manager.addEmployee("Novo Funcionario");
                        System.out.println("Lista de Funcionários após adicionar um novo funcionário: " + manager.getEmpList());
                        System.out.println("Lista de Funcionários Clonados ainda: " + clonedEmployees.getEmpList());
                    } catch (CloneNotSupportedException e) {
                        e.printStackTrace();
                    }
                    break;
                case 5:
                    System.out.println("Saindo...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }
}
