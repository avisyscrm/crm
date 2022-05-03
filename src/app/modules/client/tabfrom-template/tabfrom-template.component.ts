import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabfrom-template',
  templateUrl: './tabfrom-template.component.html',
  styleUrls: ['./tabfrom-template.component.scss']
})
export class TabfromTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 
  fromTab={
    "page": [{
      "section": {
        "productEntityTemplateSectionId": 1,
        "productEntityTemplateId": 4,
        "sequenceId": 1,
        "section": "Main Tab",
        "type": "Tab",
        "parentId": 0
      },
      "tabSections": [{
        "section": {
          "productEntityTemplateSectionId": 2,
          "productEntityTemplateId": 4,
          "sequenceId": 2,
          "section": "Student Section",
          "type": "Section",
          "parentId": 1,
          "components": [{
            "productEntityTemplateAttributesId": 2,
            "productEntityTemplateId": 4,
            "sequenceId": 2,
            "productAttribute": "Name",
            "description": "Name of customer",
            "productAttributeDataType": "String",
            "productAttributeLength": 100,
            "dataCaptureControl": "Text",
            "value": "Ajay Shinde",
            "validator": ["Validators.mandatory", "Validators.editable"],
            "section": "Student Section",
            "optionsList": []
          }, {
            "productEntityTemplateAttributesId": 3,
            "productEntityTemplateId": 4,
            "sequenceId": 3,
            "productAttribute": "Gender",
            "description": "Gender of customer",
            "productAttributeDataType": "radio",
            "productAttributeLength": 10,
            "dataCaptureControl": "Date",
            "value": "Male",
            "validator": ["Validators.mandatory", "Validators.editable"],
            "section": "Student Section",
            "optionsList": [{
              "key": "0",
              "value": "Male"
            }, {
              "key": "1",
              "value": "Female"
            }, {
              "key": "2",
              "value": "Other"
            }]
          }]
        }
      }, {
        "section": {
          "productEntityTemplateSectionId": 3,
          "productEntityTemplateId": 4,
          "sequenceId": 1,
          "section": "Address Section",
          "type": "Section",
          "parentId": 1,
          "components": [{
            "productEntityTemplateAttributesId": 4,
            "productEntityTemplateId": 4,
            "sequenceId": 3,
            "productAttribute": "Address Type",
            "description": "Address Location",
            "productAttributeDataType": "select",
            "productAttributeLength": 100,
            "dataCaptureControl": "text",
            "value": "Office",
            "validator": ["Validators.mandatory", "Validators.editable"],
            "section": "Address Section",
            "optionsList": [{
              "key": "0",
              "value": "Home"
            }, {
              "key": "1",
              "value": "Office"
            }]
          }, {
            "productEntityTemplateAttributesId": 5,
            "productEntityTemplateId": 4,
            "sequenceId": 3,
            "productAttribute": "City",
            "description": "City of customer",
            "productAttributeDataType": "radio",
            "productAttributeLength": 100,
            "dataCaptureControl": "text",
            "value": "Aurangabad",
            "validator": ["Validators.mandatory", "Validators.editable"],
            "section": "Address Section",
            "optionsList": [{
              "key": "0",
              "value": "PCMC"
            }, {
              "key": "1",
              "value": "Pune"
            }, {
              "key": "2",
              "value": "Aurangabad"
            }, {
              "key": "3",
              "value": "Mumbai"
            }]
          }]
        }
      }, {
        "section": {
          "productEntityTemplateSectionId": 8,
          "productEntityTemplateId": 4,
          "sequenceId": 3,
          "section": "Salary Section",
          "type": "Section",
          "parentId": 1,
          "components": []
        }
      }]
    }, {
      "section": {
        "productEntityTemplateSectionId": 9,
        "productEntityTemplateId": 4,
        "sequenceId": 3,
        "section": "Fee Details Tab",
        "type": "tab",
        "parentId": 0
      },
      "tabSections": []
    }]
  };
// 

}
