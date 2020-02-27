
export class Issue {
    constructor(public id: String,
        public reportNumber: String,
        public timestamp: String,
        public reportTimestamp: String,
        public status: String,
        public idSupporter: String,
        public description: String,
        public classification: String,
        public service: String
    ) { };

    public asignSupporter(id) {
        this.idSupporter = id;
    }

}