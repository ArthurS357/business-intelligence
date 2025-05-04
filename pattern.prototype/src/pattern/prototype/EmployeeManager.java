package pattern.prototype;

import java.util.List;

public class EmployeeManager {

    private Employees employees;

    public EmployeeManager() {
        employees = new Employees();
        employees.loadData();
    }

    public void addEmployee(String name) {
        employees.getEmpList().add(name);
    }

    public boolean removeEmployee(String name) {
        return employees.getEmpList().remove(name);
    }

    public void displayEmployees() {
        List<String> empList = employees.getEmpList();
        if (empList.isEmpty()) {
            System.out.println("A lista de funcionários está vazia.");
        } else {
            System.out.println("Lista de Funcionários: " + empList);
        }
    }

    public Employees cloneEmployees() throws CloneNotSupportedException {
        return (Employees) employees.clone();
    }

    public List<String> getEmpList() {
        return employees.getEmpList();
    }
}
