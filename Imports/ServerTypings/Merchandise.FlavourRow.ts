namespace Indotalent.Merchandise {
    export interface FlavourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace FlavourRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Flavour';
        export const lookupKey = 'Merchandise.Flavour';

        export function getLookup(): Q.Lookup<FlavourRow> {
            return Q.getLookup<FlavourRow>('Merchandise.Flavour');
        }
        export const deletePermission = 'Merchandise:Flavour';
        export const insertPermission = 'Merchandise:Flavour';
        export const readPermission = 'Merchandise:Flavour';
        export const updatePermission = 'Merchandise:Flavour';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
