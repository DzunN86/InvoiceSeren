namespace Indotalent.Merchandise {
    export interface BrandRow {
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

    export namespace BrandRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Brand';
        export const lookupKey = 'Merchandise.Brand';

        export function getLookup(): Q.Lookup<BrandRow> {
            return Q.getLookup<BrandRow>('Merchandise.Brand');
        }
        export const deletePermission = 'Merchandise:Brand';
        export const insertPermission = 'Merchandise:Brand';
        export const readPermission = 'Merchandise:Brand';
        export const updatePermission = 'Merchandise:Brand';

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
