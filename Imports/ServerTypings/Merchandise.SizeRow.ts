namespace Indotalent.Merchandise {
    export interface SizeRow {
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

    export namespace SizeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Size';
        export const lookupKey = 'Merchandise.Size';

        export function getLookup(): Q.Lookup<SizeRow> {
            return Q.getLookup<SizeRow>('Merchandise.Size');
        }
        export const deletePermission = 'Merchandise:Size';
        export const insertPermission = 'Merchandise:Size';
        export const readPermission = 'Merchandise:Size';
        export const updatePermission = 'Merchandise:Size';

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
