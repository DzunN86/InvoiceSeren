namespace Indotalent.Sales {
    export namespace InvoicePaymentService {
        export const baseUrl = 'Sales/InvoicePayment';

        export declare function Create(request: Serenity.SaveRequest<InvoicePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InvoicePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Currency(request: InvoicePaymentCurrencyRequest, onSuccess?: (response: InvoicePaymentCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Sales/InvoicePayment/Create",
            Update = "Sales/InvoicePayment/Update",
            Delete = "Sales/InvoicePayment/Delete",
            Retrieve = "Sales/InvoicePayment/Retrieve",
            List = "Sales/InvoicePayment/List",
            Currency = "Sales/InvoicePayment/Currency"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Currency'
        ].forEach(x => {
            (<any>InvoicePaymentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
