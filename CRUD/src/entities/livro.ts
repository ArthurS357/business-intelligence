import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Emprestimo } from "./emprestimo";

@Entity("livros") // Especifica o nome da tabela
export class Livro {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false }) // Campo obrigatório
    titulo: string;

    @Column({ nullable: false }) // Campo obrigatório
    autor: string;

    @Column({ nullable: false }) // Campo obrigatório
    categoria: string;

    @OneToMany(() => Emprestimo, emprestimo => emprestimo.livro) // Relacionamento com Emprestimo
    emprestimos!: Emprestimo[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

