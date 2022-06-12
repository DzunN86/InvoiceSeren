namespace Indotalent.Settings {
    export interface CashBankRow {
        Id?: number;
        Name?: string;
        Description?: string;
        AccountNumber?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CashBankRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Settings.CashBank';
        export const lookupKey = 'Settings.CashBank';

        export function getLookup(): Q.Lookup<CashBankRow> {
            return Q.getLookup<CashBankRow>('Settings.CashBank');
        }
        export const deletePermission = 'Settings:CashBank';
        export const insertPermission = 'Settings:CashBank';
        export const readPermission = 'Settings:CashBank';
        export const updatePermission = 'Settings:CashBank';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            AccountNumber = "AccountNumber",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
