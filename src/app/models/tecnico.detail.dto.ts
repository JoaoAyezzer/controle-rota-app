import { VisitaDTO } from './vista.dto';
export interface TecnicoDetailDTO{
    id: string;
    nome: string;
    email: string;
    tipoTecnico: string;
    telefones: string[];
    visitas: VisitaDTO[];
    imageUrl?: string;

}