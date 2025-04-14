import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Aluno } from "./aluno";
import { Livro } from "./livro";

@Entity("emprestimos")
export class Emprestimo {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    dtEmprestimo: Date;

    @Column({ type: 'date', nullable: true })
    dtDevolucao: Date;

    @Column()
    status: string;

    @ManyToOne(() => Livro, livro => livro.emprestimos)
    livro: Livro;

    @ManyToOne(() => Aluno, aluno => aluno.emprestimos)
    aluno: Aluno;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
