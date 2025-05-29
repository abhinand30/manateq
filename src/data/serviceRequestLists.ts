import { ClickableCell } from "@/components/ClickableCell";

const commonAuditHeader = [{ id: 1, selector: "changedDate", title: "Changed Date" },
{ id: 2, cell: (row: any) => ClickableCell({ row: row, field: "changedBy" }), title: "Changed By" },
{ id: 3, cell: (row: any) => ClickableCell({ row: row, field: "event" }), title: "Event" },
{ id: 4, selector: "changedField", title: "Changed Field" },
{ id: 5, selector: "oldValue", title: "Old Value" },
{ id: 6, selector: "newValue", title: "New Value" }];

const commonAdministrationHeader = [
    { id: 1, title: 'Created By', name: 'created_by', isLink: true, },
    { id: 2, title: 'Created On', name: 'created_on', },
    { id: 3, title: 'Modified By', name: 'modified_by', isLink: true },
    { id: 4, title: 'Modified On', name: 'modified_on', },
    { id: 5, title: 'Owner', name: 'owner', isLink: true, isSearch: true },
    { id: 6, title: 'Name', name: 'name', },
]

const commonTabArray = [
    { id: 1, name: 'general', title: 'General' },
    { id: 2, name: 'timeline', title: 'Timeline' },
    { id: 3, name: 'administration', title: 'administration' },
    { id: 4, name: 'auditHistory', title: 'Audit History' },
]

const serviceRequest = {
    // 1
    investorBlackList: {
        tabArray: commonTabArray,
        headers: {
            general: [
                { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                { id: 3, title: 'Plot Number', name: 'plotNumber', isLink: true },
                { id: 4, title: 'Current Agreement', name: 'currentAgreement', isLink: true, isSearch: true },
                { id: 5, title: 'Requesting Department', name: 'requestingDepartment', isLink: true, isSearch: true },
                { id: 6, title: 'Type', name: 'type', },
                { id: 7, title: 'Comment', name: 'comment' },
            ],
            timeline: {},
            administration: commonAdministrationHeader,
            auditHistory: commonAuditHeader

        }

    },
    // 2
    blockUnblockInvestor: {
        tabArray: commonTabArray,
        headers: {
            general: [
                { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                { id: 3, title: 'Plot Number', name: 'plotNumber', isLink: true },
                { id: 4, title: 'Current Agreement', name: 'currentAgreement', isLink: true, isSearch: true },
                { id: 5, title: 'Requesting Department', name: 'requestingDepartment', isLink: true, isSearch: true },
                { id: 6, title: 'Type', name: 'type', },
                { id: 7, title: 'Reason', name: 'reason' },
            ],
            timeline: {},
            administration: commonAdministrationHeader,
            auditHistory: commonAuditHeader
        }
    },
    //3
    blockPlot: {
        tabArray: commonTabArray,
        headers: {
            general: [
                { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                { id: 3, title: 'Plot ', name: 'plot', isLink: true },
                { id: 4, title: 'Current Agreement', name: 'currentAgreement', isLink: true, isSearch: true },
                { id: 5, title: 'Type', name: 'type', isToggle: true },
                { id: 6, title: 'Comment', name: 'comment' },
            ],
            timeline: {},
            administration: commonAdministrationHeader,
            auditHistory: commonAuditHeader
        }
    },
    //4
    unblockPlot: {
        tabArray: commonTabArray,
        headers: {
            general: [
                { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                { id: 3, title: 'Plot ', name: 'plot', isLink: true },
                { id: 4, title: 'Current Agreement', name: 'currentAgreement', isLink: true, isSearch: true },
                { id: 5, title: 'Comment', name: 'comment' },
            ],
            timeline: {},
            administration: commonAdministrationHeader,
            auditHistory: commonAuditHeader
        }
    },
    //5
    agreementExpiryRenewal: {
        tabArray: [
            { id: 1, name: 'requestDecision', title: 'Request Decision' },
            { id: 2, name: 'general', title: 'General' },
            { id: 3, name: 'timeline', title: 'Timeline' },
            { id: 4, name: 'administration', title: 'administration' },
            { id: 5, name: 'auditHistory', title: 'Audit History' },
        ],
        headers: {
            requestDecision: [
                { id: 1, title: 'Request Status', name: 'requestStatus', isLink: true, isSearch: true },
                { id: 2, title: 'Decision', name: 'decision', isSearch: true },
                { id: 3, title: 'Status', name: 'status' },
            ],
            general: [
                { id: 1, title: 'Agreements', name: 'agreement', isLink: true, isSearch: true },
                { id: 2, title: 'Industrial Applications', name: 'industrialApplication', isLink: true, isSearch: true },
                { id: 3, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                { id: 4, title: 'Termination Date', name: 'terminationDate' },
                { id: 5, title: 'Plot ', name: 'plot', isLink: true },
                { id: 6, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
            ],
            timeline: {},
            administration: [
                { id: 1, title: 'Created By', name: 'created_by', isLink: true, },
                { id: 2, title: 'Created On', name: 'created_on', },
                { id: 3, title: 'Modified By', name: 'modified_by', isLink: true },
                { id: 4, title: 'Modified On', name: 'modified_on', },
            ],
            auditHistory: commonAuditHeader
        }
    },
    //6
    termination: {
        tabArray: [
            { id: 1, name: 'requestStatus', title: 'Request Status' },
            { id: 2, name: 'general', title: 'General' },
            { id: 3, name: 'timeline', title: 'Timeline' },
            { id: 4, name: 'administration', title: 'administration' },
            { id: 5, name: 'auditHistory', title: 'Audit History' },
        ],
        headers: {
            requestStatus: [
                { id: 1, title: 'Request Status', name: 'requestStatus', isLink: true, isSearch: true },
                { id: 2, title: 'Decision', name: 'decision', isSearch: true },
            ],
            general: [
                { id: 1, title: 'Agreements', name: 'agreement', isLink: true, isSearch: true },
                { id: 2, title: 'Investor', name: 'invetor', isLink: true, },
                { id: 3, title: 'Contact Person', name: 'contactPerson', isLink: true, },
                { id: 4, title: 'Plot ', name: 'plot', isLink: true },
                { id: 5, title: 'Termaination Type', name: 'terminationType', isLink: true, isSearch: true },
                { id: 6, name: '', title: '', isDropDown: true, options: ['Operational Violation', 'Financial Operations'] }
            ],
            timeline: {},
            administration: [
                { id: 1, title: 'Created By', name: 'created_by', isLink: true, },
                { id: 2, title: 'Created On', name: 'created_on', },
                { id: 3, title: 'Modified By', name: 'modified_by', isLink: true },
                { id: 4, title: 'Modified On', name: 'modified_on', },
            ],
            auditHistory: commonAuditHeader
        }
    },
    //7
    landSwap: {
        tabArray: [
            { id: 2, name: 'information', title: 'Information' },
            { id: 3, name: 'timeline', title: 'Timeline' },
            { id: 4, name: 'administration', title: 'administration' },
            { id: 5, name: 'auditHistory', title: 'Audit History' },
        ],
        headers: {
            information: [
                { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                { id: 2, title: 'Current Agreement', name: 'currentAgreement', isLink: true, isSearch: true },
                { id: 3, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                { id: 4, title: 'Current Plot ', name: 'currentplot', isLink: true },
                { id: 5, title: 'New Plot ', name: 'newPlot', isLink: true, isSearch: true },
                { id: 6, title: 'Land Swap Date ', name: 'newPlot', isLink: true, isDate: true },
                { id: 7, title: 'Industrial Applications', name: 'industrialApplication', isLink: true, },
                { id: 8, title: 'Comment', name: 'comment' },

            ],
            timeline: {},
            administration: commonAdministrationHeader,
            auditHistory: commonAuditHeader
        }
    },
    //8
    plotMerge: {
        tabArray: commonTabArray,
        headers: {
            general: [
                { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true, },
                { id: 3, title: 'Plot 1', name: 'plot1', isLink: true, isSearch: true },
                { id: 4, title: 'Plot 2', name: 'plot2', isLink: true, isSearch: true },
                { id: 5, title: 'Industrial Plot 1', name: 'industrialPlot1', isLink: true, },
                { id: 6, title: 'Industrial Plot 2', name: 'industrialPlot2', isLink: true, },
                { id: 7, title: 'Plot Merge Date', name: 'plot1', isDate: true },
                { id: 8, title: 'Comment', name: 'comment' },
            ],
            timeline: {},
            administration: commonAdministrationHeader,
            auditHistory: commonAuditHeader
        }
    },
    //9
    plotSizeChange: {
        tabArray: {
            commonTabArray,
            headers: {
                general: [
                    { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                    { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                    { id: 3, title: 'Plot 1', name: 'plot1', isLink: true, isSearch: true },
                    { id: 4, title: 'New Size', name: 'newSize', },
                    { id: 5, name: 'plotSizeChangeType', title: 'Plot Size Change Type', isDropDown: true, options: ['Operational Violation', 'Financial Operations'] },
                    { id: 6, title: 'Industrial Applications', name: 'industrialApplication', isLink: true, },
                    { id: 7, title: 'Plot Size Change Date', name: 'plotSizeChangeDate', isDate: true },
                    { id: 8, title: 'Comment', name: 'comment' },
                ],
                timeline: {},
                administration: commonAdministrationHeader,
                auditHistory: commonAuditHeader
            }
        },
        //10
        landTransfer: {
            tabArray: [
                { id: 1, name: 'decision', title: 'Decision' },
                { id: 2, name: 'landTranferRequest', title: 'Land Tranfer Request' },
                { id: 3, name: 'timeline', title: 'Timeline' },
                { id: 4, name: 'auditHistory', title: 'Audit History' },
            ],
            headers: {
                decision: [
                    { id: 1, title: 'Request Status', name: 'requestStatus', isLink: true, isSearch: true },
                    { id: 2, title: 'Decision', name: 'decision', isSearch: true },
                    { id: 3, title: 'Comment', name: 'comment' },
                ],
                landTranferRequest: {
                    currentCR: {
                        title: 'Current CR',
                        header1: [
                            { id: 1, title: 'Investor', name: 'invetor', isLink: true, isSearch: true },
                            { id: 2, title: 'CR Number', name: 'CRNumber', isLink: true, isSearch: true },
                            { id: 3, title: 'Investor Name', name: 'investor', isLink: true, isSearch: true },
                            { id: 4, title: 'Arabic Investor Name', name: 'arabicInvestor', isLink: true, isSearch: true },
                            { id: 5, title: 'Land Transfer Type', name: 'landTransfer', isLink: true, isSearch: true },
                            { id: 6, title: 'Applicant', name: 'applicant', isLink: true, isSearch: true },
                            { id: 7, title: 'Contact Person', name: 'contactPerson', isLink: true, isSearch: true },
                            { id: 8, title: 'First Name', name: 'firstName', },
                            { id: 9, title: 'Last Name', name: 'lastName', },
                            { id: 10, title: 'Email', name: 'email', isLink: true, isSearch: true },
                            { id: 11, title: 'Mobile', name: 'mobile', isLink: true, isSearch: true },
                            { id: 12, title: 'Agreement', name: 'agreement', isLink: true, isSearch: true },
                            { id: 13, title: 'Commencement Date', name: 'commencementDate', isLink: true, isSearch: true },
                            { id: 14, title: 'End Date', name: 'end Date', isLink: true, isSearch: true },
                            { id: 15, title: 'Agreement Type', name: 'agreementType', },
                            { id: 16, title: 'Status Reason', name: 'statusReason', },
                            { id: 17, title: 'Request Status', name: 'requestStatus', isLink: true, isSearch: true },
                            { id: 18, title: 'Plot', name: 'plot', isLink: true, isSearch: true },
                            { id: 19, title: 'PIN', name: 'pin', isLink: true, isSearch: true },
                            { id: 20, title: 'Project', name: 'project', isLink: true, },
                            { id: 21, title: 'Cluster', name: 'cluster', isLink: true, },
                            { id: 22, title: 'Type', name: 'type', isLink: true, isSearch: true },
                            { id: 23, title: 'Status Reason', name: 'statusReason', isLink: true, isSearch: true },
                            { id: 24, title: 'Size', name: 'size', isLink: true, isSearch: true },
                            { id: 25, title: 'Dimension', name: 'dimension', isLink: true, isSearch: true },
                            { id: 26, title: 'Total GFA(m2)', name: 'totalGFA', isLink: true, isSearch: true }
                            // { id:, title:, name:, isLink: true, isSearch: true }
                        ],
                        header2: [
                            { id: 1, title: 'Transfert To Investor', name: 'transferToInvestor', isLink: true, isSearch: true },
                            { id: 2, title: 'CR Number', name: 'CRNumber', isLink: true, isSearch: true },
                            { id: 3, title: 'Investor Name', name: 'investor', isLink: true, isSearch: true },
                            { id: 4, title: 'Arabic Investor Name', name: 'arabicInvestor', isLink: true, isSearch: true },
                            { id: 5, title: 'New Contact Person', name: 'newContactPerson', isLink: true, isSearch: true },
                            { id: 6, title: 'First Name', name: 'firstName', },
                            { id: 7, title: 'Last Name', name: 'lastName', },
                            { id: 8, title: 'Email', name: 'email', isLink: true, isSearch: true },
                            { id: 9, title: 'Mobile', name: 'mobile', isLink: true, isSearch: true },
                            { id: 10, title: 'TPC CR Number', name: 'TPCCRNumber', isLink: true, isSearch: true },
                            { id: 11, title: 'TPC First Name(EN)', name: 'TPC_CRNumber', isLink: true, isSearch: true },
                            { id: 12, title: 'TPC Last Name(EN)', name: 'TPC_CRNumber', isLink: true, isSearch: true },
                            { id: 13, title: 'TPC New Investor Name(AR)', name: 'TPC_CRNumber', isLink: true, isSearch: true },
                            { id: 14, title: 'TPC New Investor Email', name: 'TPC_CRNumber', isLink: true, isSearch: true },


                        ]
                    }
                },
                timeline: {},
                auditHistory: {}
            }
        }

    }

}

// {
//   "Current CR": {
//     "Investor": {
//       "Name": "Sosco Wll",
//       "Arabic Investor Name": "قطر للطاقة"
//     },
//     "CR Number": "24863",
//     "Land Transfer Type": "---",
//     "Contact Person": {
//       "First Name": "Arthur",
//       "Last Name": "Tailor",
//       "Email": "Arthurtailor@gmail.com",
//       "Mobile": "71304846"
//     },
//     "Commencement Date": "05/01/2025",
//     "End Date": "05/01/2026",
//     "Status Reason": "Active",
//     "Request Status": "P&L User Decision",
//     "Applicant": "Arthur Tailor",
//     "Agreement": {
//       "Number": "AG-LP-99554-O...",
//       "Type": "Lease"
//     },
//     "Plot": "AK-LP-V-73839",
//     "Cluster": "932838",
//     "PIN": "---",
//     "Project": "N782",
//     "Type": "---",
//     "Status Reason": "Allocated",
//     "Dimension": "---",
//     "Total GFA (m2)": "---",
//     "Size": "---"
//   }
// }


// {
//   "New_CR": {
//     "Transfer_to_Investor": "Sosco Wil",
//     "CR_Number": "24863",
//     "Investor_Name": "Sosco Wil",
//     "Arabic_Investor_Name": "قطر للطاقة",
//     "New_Contact_Person": "Arthur Tailor",
//     "First_Name": "Arthur",
//     "Last_Name": "Tailor",
//     "Email": "Arthurtailor@gmail.com",
//     "Mobile_Phone": "782476467",
//     "TPC_CR_Number": "---",
//     "TPC_First_Name_EN": "---",
//     "TPC_Last_Name_EN": "---",
//     "TPC_New_Investor_Name_AR": "---",
//     "TPC_Invited_Investor_Email": "---"
//   }
// }
