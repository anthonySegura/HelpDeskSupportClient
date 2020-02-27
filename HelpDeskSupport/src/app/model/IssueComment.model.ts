export class IssueComment {

    constructor(
        public id: string,
        public description: string,
        public noteTimeStamp: string,
        public idIssue: string,
        public reportNumber: string
    ) { }
}