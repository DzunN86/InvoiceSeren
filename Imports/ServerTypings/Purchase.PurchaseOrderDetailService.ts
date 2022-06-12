namespace Indotalent.Purchase {
    export namespace PurchaseOrderDetailService {
        export const baseUrl = 'Purchase/PurchaseOrderDetail';

        export declare function Create(request: Serenity.SaveRequest<PurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Purchase/PurchaseOrderDetail/Create",
            Update = "Purchase/PurchaseOrderDetail/Update",
            Delete = "Purchase/PurchaseOrderDetail/Delete",
            Retrieve = "Purchase/PurchaseOrderDetail/Retrieve",
            List = "Purchase/PurchaseOrderDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchaseOrderDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
