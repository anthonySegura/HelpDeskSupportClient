export class IssueNote {
    constructor(
        public id: string,
        public idIssue: string,
        public description: string,
        public noteTimeStamp: string
    ) { }
}