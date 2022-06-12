namespace Indotalent.Merchandise {
    export interface ColourRow {
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

    export namespace ColourRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Colour';
        export const lookupKey = 'Merchandise.Colour';

        export function getLookup(): Q.Lookup<ColourRow> {
            return Q.getLookup<ColourRow>('Merchandise.Colour');
        }
        export const deletePermission = 'Merchandise:Colour';
        export const insertPermission = 'Merchandise:Colour';
        export const readPermission = 'Merchandise:Colour';
        export const updatePermission = 'Merchandise:Colour';

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
