
export class DynamicForm {

    templateId!: number;
    tabId!: number;
    templateData !: any;

    constructor( templateId:number, tabId:number, templateData:any){
        this.templateId = templateId;
        this.tabId = tabId;
        this.templateData = templateData;
    }
}