namespace Indotalent.Merchandise {
    export interface UomRow {
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

    export namespace UomRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Uom';
        export const lookupKey = 'Merchandise.Uom';

        export function getLookup(): Q.Lookup<UomRow> {
            return Q.getLookup<UomRow>('Merchandise.Uom');
        }
        export const deletePermission = 'Merchandise:Uom';
        export const insertPermission = 'Merchandise:Uom';
        export const readPermission = 'Merchandise:Uom';
        export const updatePermission = 'Merchandise:Uom';

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
