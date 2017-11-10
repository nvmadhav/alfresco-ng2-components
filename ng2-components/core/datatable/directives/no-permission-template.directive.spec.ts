/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'ng2-alfresco-core';
import { MaterialModule } from '../../material.module';
import { DataTableCellComponent } from '../components/datatable/datatable-cell.component';
import { DataTableComponent } from '../components/datatable/datatable.component';
import { DateCellComponent } from '../components/datatable/date-cell.component';
import { FileSizeCellComponent } from '../components/datatable/filesize-cell.component';
import { LocationCellComponent } from '../components/datatable/location-cell.component';
import { NoPermissionTemplateDirective } from './no-permission-template.directive';

describe('NoPermissionTemplateDirective', () => {

    let dataTable: DataTableComponent;
    let directive: NoPermissionTemplateDirective;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MaterialModule,
                CoreModule
            ],
            declarations: [
                DataTableComponent,
                DataTableCellComponent,
                DateCellComponent,
                NoPermissionTemplateDirective,
                LocationCellComponent,
                FileSizeCellComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        let fixture = TestBed.createComponent(DataTableComponent);
        dataTable = fixture.componentInstance;
        directive = new NoPermissionTemplateDirective(dataTable);
    });

    it('should apply template to the datatable', () => {
        const template = {};
        directive.template = template;
        directive.ngAfterContentInit();
        expect(dataTable.noPermissionTemplate).toBe(template);
    });
});
