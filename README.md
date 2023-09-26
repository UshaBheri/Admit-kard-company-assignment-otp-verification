Exercise - b [OTP Verification]

Problem Statement
You have to design 2 screens in which user can enter mobile number and we can verify
Screen-1: Mobile Number Screen
Screen-2: OTP Verification Screen
Screen-3: Success Screen (Optional, You can show the success message on screen-2 itself)
Here is the workflow of whole process
• Screen 1: Enter Mobile Number (and change country if required)
• Click on “Send OTP”
• A random OTP should be generated via a REST-API
• Screen 2: Ask for OTP
• Enter OTP number by number (Here you can show OTP generated via REST-API on screen via a
snackbar(on screen notification))
• Click on “Verify OTP”
• Verify the OTP via REST-API
• Success - Screen 3 / Failure Snackbar(on screen notification)
~ Added challenge: Try to send OTP to the actual number instead of mocking it on screen by using
some free service.[Totally Optional]

Sample Design:
Design:
https://www.figma.com/file/NW3SHq44yjrP0m54WL8Nwo/Login_dev?node-id=0%3A1
Try to match the design as close as possible

Few Pointers:
● You can use your own custom approach.
● Try to keep things as simple as possible.

Minimum Requirements
● Basic validations for fields (i.e. mobile number should be 10 digit, only of
numbers).
● If OTP is matched then the success screen should be displayed.
● If OTP is not matched then a proper error message should be displayed.

Good to have:
● Users should be able to change the country code from dropdown.
● All kinds of validations to stop users from filling garbage values in the fields.
● Handling all scenarios of wrong numbers and OTP not received on the phone.
● Responsive Design across multiple devices like laptop, mobile, tablet, etc.