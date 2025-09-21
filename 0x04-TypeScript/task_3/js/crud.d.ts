
/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

// Declare the CRUD functions using RowElement and RowID
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
