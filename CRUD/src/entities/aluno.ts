import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Emprestimo } from "./emprestimo";

@Entity("alunos")
export class Aluno {
  @PrimaryGeneratedColumn("uuid") // Gera automaticamente um UUID
  id!: string;

  @Column({ nullable: false }) // Campo obrigatório
  name: string;

  @Column({ nullable: false }) // Campo obrigatório
  email: string;

  @Column({ nullable: false }) // Campo obrigatório
  curso!: string; // Armazena o nome do curso como uma string

  @OneToMany(() => Emprestimo, emprestimo => emprestimo.aluno) // Relacionamento com Emprestimo
    emprestimos!: Emprestimo[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
