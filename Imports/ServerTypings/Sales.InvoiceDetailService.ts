namespace Indotalent.Sales {
    export namespace InvoiceDetailService {
        export const baseUrl = 'Sales/InvoiceDetail';

        export declare function Create(request: Serenity.SaveRequest<InvoiceDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoiceDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Sales/InvoiceDetail/Create",
            Update = "Sales/InvoiceDetail/Update",
            Delete = "Sales/InvoiceDetail/Delete",
            Retrieve = "Sales/InvoiceDetail/Retrieve",
            List = "Sales/InvoiceDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InvoiceDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
