/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
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

import { element, by, Key } from 'protractor';
import { Util } from '../../../../util/util';

export class StartTaskDialog {

    name = element(by.css('input[id="name_id"]'));
    dueDate = element(by.css('input[id="date_id"]'));
    description = element(by.css('textarea[id="description_id"]'));
    assignee = element(by.css('div#people-widget-content input'));
    formDropDown = element(by.css('mat-select[id="form_id"]'));
    startButton = element(by.css('button[id="button-start"]'));
    startButtonEnabled = element(by.css('button[id="button-start"]:not(disabled)'));
    cancelButton = element(by.css('button[id="button-cancel"]'));

    addName(userName) {
        Util.waitUntilElementIsVisible(this.name);
        this.name.clear();
        this.name.sendKeys(userName);
        return this;
    }

    addDescription(userDescription) {
        Util.waitUntilElementIsVisible(this.description);
        this.description.sendKeys(userDescription);
        return this;
    }

    addDueDate(date) {
        Util.waitUntilElementIsVisible(this.dueDate);
        this.dueDate.sendKeys(date);
        return this;
    }

    addAssignee(name) {
        Util.waitUntilElementIsVisible(this.assignee);
        this.assignee.sendKeys(name);
        this.selectAssigneeFromList(name);
        return this;
    }

    selectAssigneeFromList(name) {
        let assigneeRow = element(by.cssContainingText('mat-option span.adf-people-label-name', name));
        Util.waitUntilElementIsVisible(assigneeRow);
        assigneeRow.click();
        Util.waitUntilElementIsNotVisible(assigneeRow);
        return this;
    }

    getAssignee() {
        Util.waitUntilElementIsVisible(this.assignee);
        return this.assignee.getAttribute('placeholder');
    }

    addForm(form) {
        Util.waitUntilElementIsVisible(this.formDropDown);
        this.formDropDown.click();
        return this.selectForm(form);
    }

    selectForm(form) {
        let option = element(by.cssContainingText('span[class*="mat-option-text"]', form));
        Util.waitUntilElementIsVisible(option);
        Util.waitUntilElementIsClickable(option);
        option.click();
        return this;
    }

    clickStartButton() {
        Util.waitUntilElementIsVisible(this.startButton);
        Util.waitUntilElementIsClickable(this.startButton);
        return this.startButton.click();
    }

    checkStartButtonIsEnabled() {
        Util.waitUntilElementIsVisible(this.startButtonEnabled);
        return this;
    }

    checkStartButtonIsDisabled() {
        Util.waitUntilElementIsVisible(this.startButton.getAttribute('disabled'));
        return this;
    }

    clickCancelButton() {
        Util.waitUntilElementIsVisible(this.cancelButton);
        Util.waitUntilElementIsClickable(this.cancelButton);
        return this.cancelButton.click();
    }

    blur(locator) {
        locator.click();
        locator.sendKeys(Key.TAB);
        return this;
    }

    checkValidationErrorIsDisplayed(error, elementRef = 'mat-error') {
        const errorElement = element(by.cssContainingText(elementRef, error));
        Util.waitUntilElementIsVisible(errorElement);
        return this;
    }
}
