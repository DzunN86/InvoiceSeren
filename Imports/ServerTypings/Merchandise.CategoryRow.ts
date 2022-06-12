namespace Indotalent.Merchandise {
    export interface CategoryRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace CategoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Category';
        export const deletePermission = 'Merchandise:Category';
        export const insertPermission = 'Merchandise:Category';
        export const readPermission = 'Merchandise:Category';
        export const updatePermission = 'Merchandise:Category';

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
