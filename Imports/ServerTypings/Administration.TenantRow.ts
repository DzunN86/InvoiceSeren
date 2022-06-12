namespace Indotalent.Administration {
    export interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Currency?: string;
        MaximumUser?: number;
        ProductNumberPrefix?: string;
        ProductNumberUseDate?: boolean;
        ProductNumberLength?: number;
        CustomerNumberPrefix?: string;
        CustomerNumberUseDate?: boolean;
        CustomerNumberLength?: number;
        SalesNumberPrefix?: string;
        SalesNumberUseDate?: boolean;
        SalesNumberLength?: number;
        InvoiceNumberPrefix?: string;
        InvoiceNumberUseDate?: boolean;
        InvoiceNumberLength?: number;
        InvoicePaymentNumberPrefix?: string;
        InvoicePaymentNumberUseDate?: boolean;
        InvoicePaymentNumberLength?: number;
        VendorNumberPrefix?: string;
        VendorNumberUseDate?: boolean;
        VendorNumberLength?: number;
        PurchaseNumberPrefix?: string;
        PurchaseNumberUseDate?: boolean;
        PurchaseNumberLength?: number;
        BillNumberPrefix?: string;
        BillNumberUseDate?: boolean;
        BillNumberLength?: number;
        BillPaymentNumberPrefix?: string;
        BillPaymentNumberUseDate?: boolean;
        BillPaymentNumberLength?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TenantRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenant';
        export const lookupKey = 'Administration.Tenant';

        export function getLookup(): Q.Lookup<TenantRow> {
            return Q.getLookup<TenantRow>('Administration.Tenant');
        }
        export const deletePermission = 'Administration:Tenant';
        export const insertPermission = 'Administration:Tenant';
        export const readPermission = 'Administration:Tenant';
        export const updatePermission = 'Administration:Tenant';

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Currency = "Currency",
            MaximumUser = "MaximumUser",
            ProductNumberPrefix = "ProductNumberPrefix",
            ProductNumberUseDate = "ProductNumberUseDate",
            ProductNumberLength = "ProductNumberLength",
            CustomerNumberPrefix = "CustomerNumberPrefix",
            CustomerNumberUseDate = "CustomerNumberUseDate",
            CustomerNumberLength = "CustomerNumberLength",
            SalesNumberPrefix = "SalesNumberPrefix",
            SalesNumberUseDate = "SalesNumberUseDate",
            SalesNumberLength = "SalesNumberLength",
            InvoiceNumberPrefix = "InvoiceNumberPrefix",
            InvoiceNumberUseDate = "InvoiceNumberUseDate",
            InvoiceNumberLength = "InvoiceNumberLength",
            InvoicePaymentNumberPrefix = "InvoicePaymentNumberPrefix",
            InvoicePaymentNumberUseDate = "InvoicePaymentNumberUseDate",
            InvoicePaymentNumberLength = "InvoicePaymentNumberLength",
            VendorNumberPrefix = "VendorNumberPrefix",
            VendorNumberUseDate = "VendorNumberUseDate",
            VendorNumberLength = "VendorNumberLength",
            PurchaseNumberPrefix = "PurchaseNumberPrefix",
            PurchaseNumberUseDate = "PurchaseNumberUseDate",
            PurchaseNumberLength = "PurchaseNumberLength",
            BillNumberPrefix = "BillNumberPrefix",
            BillNumberUseDate = "BillNumberUseDate",
            BillNumberLength = "BillNumberLength",
            BillPaymentNumberPrefix = "BillPaymentNumberPrefix",
            BillPaymentNumberUseDate = "BillPaymentNumberUseDate",
            BillPaymentNumberLength = "BillPaymentNumberLength",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
