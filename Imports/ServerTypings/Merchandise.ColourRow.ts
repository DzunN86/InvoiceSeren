namespace Indotalent.Merchandise {
    export interface ColourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace ColourRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Colour';
        export const deletePermission = 'Merchandise:Colour';
        export const insertPermission = 'Merchandise:Colour';
        export const readPermission = 'Merchandise:Colour';
        export const updatePermission = 'Merchandise:Colour';

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
