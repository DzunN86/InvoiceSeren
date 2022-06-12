namespace Indotalent.Merchandise {
    export interface FlavourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace FlavourRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Flavour';
        export const deletePermission = 'Merchandise:Flavour';
        export const insertPermission = 'Merchandise:Flavour';
        export const readPermission = 'Merchandise:Flavour';
        export const updatePermission = 'Merchandise:Flavour';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
