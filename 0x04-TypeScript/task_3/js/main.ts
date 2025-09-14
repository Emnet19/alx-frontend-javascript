/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Call updateRow
CRUD.updateRow(newRowID, updatedRow);

// Call deleteRow
CRUD.deleteRow(newRowID);
