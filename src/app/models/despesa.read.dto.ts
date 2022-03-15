export interface DespesaReadDTO {
    id: string;
    tipoDespesa: string;
    tecnicoID: string;
    nomeTecnico: string;
    visitaID: string;
    clienteVisita: string;
    data: string;
    valor: string;
    urlComprovante?: string
}