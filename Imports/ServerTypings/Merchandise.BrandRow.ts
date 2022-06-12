namespace Indotalent.Merchandise {
    export interface BrandRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace BrandRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Brand';
        export const deletePermission = 'Merchandise:Brand';
        export const insertPermission = 'Merchandise:Brand';
        export const readPermission = 'Merchandise:Brand';
        export const updatePermission = 'Merchandise:Brand';

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
