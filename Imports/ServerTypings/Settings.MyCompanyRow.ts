namespace Indotalent.Settings {
    export interface MyCompanyRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Currency?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        ProductNumberPrefix?: string;
        ProductNumberUseDate?: number;
        ProductNumberLength?: number;
        CustomerNumberPrefix?: string;
        CustomerNumberUseDate?: number;
        CustomerNumberLength?: number;
        SalesNumberPrefix?: string;
        SalesNumberUseDate?: number;
        SalesNumberLength?: number;
        InvoiceNumberPrefix?: string;
        InvoiceNumberUseDate?: number;
        InvoiceNumberLength?: number;
        InvoicePaymentNumberPrefix?: string;
        InvoicePaymentNumberUseDate?: number;
        InvoicePaymentNumberLength?: number;
        VendorNumberPrefix?: string;
        VendorNumberUseDate?: number;
        VendorNumberLength?: number;
        PurchaseNumberPrefix?: string;
        PurchaseNumberUseDate?: number;
        PurchaseNumberLength?: number;
        BillNumberPrefix?: string;
        BillNumberUseDate?: number;
        BillNumberLength?: number;
        BillPaymentNumberPrefix?: string;
        BillPaymentNumberUseDate?: number;
        BillPaymentNumberLength?: number;
        MaximumUser?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
    }

    export namespace MyCompanyRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Settings.MyCompany';
        export const deletePermission = 'Settings:MyCompany';
        export const insertPermission = 'Settings:MyCompany';
        export const readPermission = 'Settings:MyCompany';
        export const updatePermission = 'Settings:MyCompany';

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Currency = "Currency",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
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
            MaximumUser = "MaximumUser",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId"
        }
    }
}
