export class IssueClient {
    constructor(
        public reportNumber: string,
        public registerTimestamp: string,
        public address: string,
        public contactPhone: string,
        public status: string,
        public supportUserAsigned: string,
        public idUser: string,
        public descripcion: string,
        public service: string
    ) {}
    
}