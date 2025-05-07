-- CreateTable
CREATE TABLE "Microareas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Microareas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agentes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" TEXT,
    "microarea_id" INTEGER,

    CONSTRAINT "Agentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacientes" (
    "cpf" CHAR(14) NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,
    "comorbidades" TEXT,
    "situacao" TEXT,
    "agente_id" INTEGER,
    "microarea_id" INTEGER,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Tarefas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "prioridade" TEXT NOT NULL DEFAULT 'media',
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_limite" TIMESTAMP(3),
    "data_conclusao" TIMESTAMP(3),
    "tipo" TEXT,
    "agente_id" INTEGER,
    "paciente_cpf" CHAR(14),

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agentes_email_key" ON "Agentes"("email");

-- AddForeignKey
ALTER TABLE "Agentes" ADD CONSTRAINT "Agentes_microarea_id_fkey" FOREIGN KEY ("microarea_id") REFERENCES "Microareas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pacientes" ADD CONSTRAINT "Pacientes_agente_id_fkey" FOREIGN KEY ("agente_id") REFERENCES "Agentes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pacientes" ADD CONSTRAINT "Pacientes_microarea_id_fkey" FOREIGN KEY ("microarea_id") REFERENCES "Microareas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarefas" ADD CONSTRAINT "Tarefas_agente_id_fkey" FOREIGN KEY ("agente_id") REFERENCES "Agentes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarefas" ADD CONSTRAINT "Tarefas_paciente_cpf_fkey" FOREIGN KEY ("paciente_cpf") REFERENCES "Pacientes"("cpf") ON DELETE CASCADE ON UPDATE CASCADE;

