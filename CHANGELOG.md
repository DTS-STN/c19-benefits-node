# Changelog
All notable changes to this product will be documented in this file.

## 2021-07-07

### Changed
* Updated the amount for CRB and the number of weeks to 50

### Removed
* CERB has been removed

## 2021-06-30

### Changed
* Update CRB and CRCB from 38 weeks to 42 weeks

## 2021-03-29

### Changed
* Updated text about number of questions

## 2021-03-18

### Changed
* Updated text on CRB, CRCB, and CRSB result cards

## 2021-01-26

### Changed
* Added a travel option to no income and some income situations. CRB and EI are not available when quarantining after travelling internationally

## 2021-01-12

### Removed
* DTC and OAS routes have been removed

## 2020-12-02
* removed cerb exhausted and rules leading to the calculation of cerb

## 2020-11-16
* Updated question flow so that your-situation no income always leads to the gross-income question and your-situation some income leads to either the cerb-exhausted, gross-income, or rrif depending on option selected,
* removed cerb question which asked if you have received cerb.
* removed income level question
* updated rules to calculate cerb and transition to EI
* ran npm audit fix to fix vulnerabilities  

## 2020-10-28

### Changed
* Updated CRB, CRCB, and CRSB result card text
* Updated all variations of DTC result card text

## 2020-10-08

### Fixed
* Fixed a bug that made the EI result card appear twice under some conditions

### Changed
* Updated EI workshare result card text
* Updated the Transition to EI result card text
* Updated RRIF result card text

### Removed
* OAS result card

## 2020-10-07

### Changed
* Updated EI result card text
* Updated CERB question text
* EI result card shows when CERB is almost exhausted now
* Changed the order in which eligilble benefits get added to the list, making CRB related results appear first

## 2020-10-02

### Changed
* updated CRB, CSRB, CRCB results card text

## 2020-09-30

### Changed
* updated plans for school question
* updated Student loan repayment options card
* updated CERB results card text
* updated EI results card text

### Removed
* removed the CESB results card

## 2020-09-29

### Changed
* updated CERB information

## 2020-09-28

### Changed
* Added CERB information
* Added new Transition to EI result
* Removed CCB

## 2020-08-26

### Removed
* Canada Child Benefit question and result have been removed

## 2020-08-25

### Changed
* Removed auto-complete from province dropdown
* Added “Your child or dependent’s school, daycare or care facility is closed due to COVID-19.” option to Your Situation - No Income and Your Situation - Some Income questions. 
* remove gst benefit card in other help section

### Added
* Added the CERB and CERB exhausted questions

## 2020-08-21

### Added
* Added Canada Recovery Benefit
* Added Canada Recovery Sickness Benefit
* Added Canada Recovery Caregiving Benefit

## 2020-08-21

### Changed
* Changed CERB duration from 24 weeks to 28 weeks

## 2020-08-4

### Changed
* Updated text on DTC question and results

## 2020-07-31

### Changed
* Updated text on DTC result card for individuals

## 2020-07-29

### Added
* Added Disability Tax Credit pages

## 2020-07-28

### Changed
* Changed T&C and privacy links in the footer to new location

## 2020-07-16

### Changed
* Split "You lost your job or employer closed" into two options on lost income page
* Changed positions of the start over button and back button
* Back button text is now "Previous"

### Added
* Added some text on the start page to indicate the questions are for individuals, not households

## 2020-07-15

### Bugfix
* Added alt text to the triangle image on the province/territory dropdown

## 2020-07-09

### Bugfix
* The triangle in the province dropdown is now clickable and will open the dropdown

## 2020-07-06

### Changed
* Pull Requests now get released to AppService Dev for Design review

## 2020-06-29

### Bugfix
* Fixed a problem where pages would fail to load multiple javascript files

## 2020-06-26

### Added
* Instructions on how to return to the application from the feedback submission (error and thanks) pages. These pages are only available when Javascript is disabled
* The back button on the feedback submission pages now returns you to the page where you submitted the feedback

## 2020-06-23

### Changed
* Feedback form now saves data to Adobe Analytics

## 2020-06-17

### Removed
* A duplicate back button has been removed from the results page

## 2020-06-16

### Removed
* Google Analytics

### Changed
* Modifed Your province or territory page to use a auto-complete dropdown isntead of radio buttons
* Modified Back button implementation to use a history stored in the session to enable navigation with no javascript
* CERB duration is now 24 weeks, up from 16

## 2020-06-12

### Added
* Feature Flag for Freetext on Feedback

## 2020-06-10

### Added
* The Disability Tax Credit
* Feature flag for DTC

### Bugfix: 
* Fixing HTML Validation Errors

## 2020-06-04

### Added 
* Tracking when users click on the button to view the not-relevant benefits.
* Added Date for sending payments to seniors

## 2020-06-03

### Changed:
* Updated static asset version number to match app version number

## 2020-06-02

### Added:
* Added error messages informing a user not to submit empty feedback forms

## 2020-06-01

### Fixed:
* Added French text for Non-Matching Results Header on Results Page

### Changed: 
* Modified content on start page
* Modified content on results page

## 2020-05-29

### Added:
* Added new option on feedback form "You don't know where to go for help."
* Added warning on start page if cookies are disabled

## 2020-05-28

### Changed:
* Added none of the above to *No Income*, *Some Income*, and *Unchanged Income* questions.
* Redesigned Results screen that displays benefits that we know about, but you weren't eligible for, with accordion expand/collapse sections

### Added:
* Custom i18n module for client-side access to locale files

### Removed:
* Removed the ei_regular_cerb and ei_sickness_cerb cards and updated the calculations/tests

## 2020-05-22

### Changed:
* OAS question now includes options for people receiving the Allowance or Allowance for the Survivor  
* OAS result now includes one-time payment information for people receiving the Allowance or Allowance for the Survivor 
* Changed OAS result payment to be "as soon as possible" for alignment with the program page 

## 2020-05-20

### Added: 
* [NEW BENEFIT] Links to provincial and territorial benefits

## 2020-05-17

### Changed: 
* Government of Canada logo redirects to canada.ca 
* Meta title, description, and images for better social media sharing 

## 2020-05-15

### Added: 
* Added a link to the business benefits finder from the start page
* Created vanity urls that redirect to the product:
  * canada.ca/coronavirus-benefits
  * canada.ca/coronavirus-prestations 

### Changed: 
* Modified text on start button from "Start now" to "Find help" 

### Removed: 
* Removed link to Canadians stuck abroad on the start page 

## 2020-05-14

### Added
 * [NEW BENEFIT] One-time payments for OAS and GIS recipients
 * [NEW BENEFIT] Canada Emergency Student Benefit (CESB)

## 2020-05-11 - Initial launch 

### Added 
* Benefits:
  * Canada Emergency Response Benefit
  * Work-Sharing
  * Mortgage support
  * Provincial help for renters
  * Suspending repayment and interest on student and apprentice loans
  * Canada Child Benefit
  * Reduced minimum withdrawals for Registered Retirement Income Funds
  * Financial aid for 2021 school year
  * GST tax credit
