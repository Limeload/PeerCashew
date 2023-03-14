# **PeerCashew**

PeerCashew is a peer-to-peer lending platform that allows borrowers to connect with investors and obtain loans.

## Features

- User authentication
- Loan requests and approvals
- Investment opportunities
- Payment processing and tracking

## Functionality

- Register an account as either a borrower or an investor.
- Create a loan request or browse available investment opportunities.
- Receive loan approval or invest in a loan request.
- Make and track payments.

## MVP

- **Authentication:** Users will be able to sign up and log in to the platform using their email and password.

- **Loan Requests:** Borrowers will be able to create loan requests, specifying the amount they want to borrow and the interest rate they are willing to pay.

- **Loan Listings:** Lenders will be able to view a list of loan requests and filter them by amount, interest rate, and other criteria.

- **Loan Investment:** Lenders will be able to invest in loan requests, specifying the amount they want to invest and the interest rate they are willing to accept.

- **Payment Processing:** The platform will handle the payment processing for each loan, collecting payments from borrowers and distributing them to lenders.

- **Dashboard:** Both borrowers and lenders will have a dashboard where they can view the loans they have created or invested in, as well as their payment history.

## User Stories

- **As a borrower**, I want to create a loan request on the platform, specifying the amount I want to borrow and the interest rate I am willing to pay.

- **As a lender**, I want to view a list of loan requests on the platform, filtered by amount, interest rate, and other criteria.

- **As a lender**, I want to invest in a loan request, specifying the amount I want to invest and the interest rate I am willing to accept.

- **As a borrower**, I want to see the status of my loan request and receive notifications when lenders invest in it.

- **As a borrower**, I want to make payments on my loan and see my payment history.

- **As a lender**, I want to receive payments from borrowers and see my payment history.

- **As a user**, I want to be able to sign up and log in to the platform using my email and password.

- **As a user**, I want to have a dashboard where I can view the loans I have created or invested in, as well as my payment history.

## How it works?

Meet Jane, a small business owner who needs to borrow $5,000 to purchase new equipment for her bakery. She visits PeerCashew and creates an account as a borrower. She then fills out an application, providing information about her business, credit history, and the purpose of the loan.

PeerCashew uses LinkedIn's Professional Network API to verify Jane's employment information and Stripe's Payment API to process her loan application fee. PeerCashew also runs a credit check on Jane using TransUnion's Credit Check API.

Jane's loan application is approved and listed on the PeerCashew platform for investors to fund. Investors can see the details of the loan, including the purpose, interest rate, and repayment schedule. Investors can then choose to invest in Jane's loan by sending the funds using Stripe's Payment API.

Once the loan is fully funded, the funds are sent to Jane's bank account using Stripe's Payment API. PeerCashew then uses Google Maps' Location and Geocoding API to verify Jane's address and display the location of the loan on a map.

Jane then repays the loan using PeerCashew's Payment API, which automatically deducts the payments from her bank account on the scheduled dates. PeerCashew also sends reminder emails to Jane when her payment is due using SendGrid's Email API.

Overall, PeerCashew provides an easy and streamlined process for borrowers like Jane to obtain loans and for investors to fund those loans.

## Deployed in Render

[PeerCashew](https://peercashew.onrender.com)

## ERD

![PeerCashew](/client/src/images/dbdiagram.png)

## Technologies used

* React for building the user interface
* Rails for the backend server
* Postgresql for the database
* Stripe for payment processing (*stretch goal*)
* Google Maps API for location and geocoding
* SendGrid API for email delivery
* LinkedIn API for employment verification
* TransUnion API for credit checks

## Figma

[PeerCashew](https://www.figma.com/file/bApNTrQgehCpF5246Jo3rj/PeerCashew?node-id=0%3A1&t=t3dkHgLpuDxc83kC-1)

## API Routes

The following routes are available in this API:

- **`GET /users`** - list all users
- **`GET /users/:id`** - show a specific user
- **`POST /users`** - create a new user
- **`PUT/PATCH /users/:id`** - update a user
- **`DELETE /users/:id`** - delete a user
- **`GET /users/:user_id/loans`** - list all loans for a specific user
- **`POST /users/:user_id/loans`** - create a new loan for a specific user
- **`GET /loans/:id`** - show a specific loan
- **`PUT/PATCH /loans/:id`** - update a loan
- **`DELETE /loans/:id`** - delete a loan
- **`GET /loans/:loan_id/investors`** - list all investors for a specific loan
- **`POST /loans/:loan_id/investors`** - create a new investor for a specific loan
- **`GET /investors/:id`** - show a specific investor
- **`PUT/PATCH /investors/:id`** - update an investor
- **`DELETE /investors/:id`** - delete an investor

*STRETCH GOALS*
- **`POST /payments`** - create a new payment record
- **`POST /payments/:id`** - could update an existing payment record.


 *PeerCashew, will utilize a range of complex APIs to deliver a comprehensive and seamless solution for both borrowers and lenders. Some of the key APIs that our app will interact with include:*

* **Stripe Payment API:** This API will enable us to handle payment processing and fund transfers efficiently.

* **Google Maps Location and Geocoding API:** With this API, we will verify the borrower and lender addresses and display the loan and investment locations on a map.

* **LinkedIn Professional Network API:** This API will allow us to verify the employment and income information of borrowers to ensure their eligibility for loans.

* **TransUnion Credit Check API:** To run credit checks on borrowers, our app will interact with this API.

* **SendGrid Email API:** Our app will use this API to send emails to both borrowers and lenders.

By leveraging these APIs, PeerCashew will offer a streamlined and user-friendly experience for all parties involved.


## Stretch goals

* Integrate a chat feature to allow borrowers and lenders to communicate in real-time.

* Add a feature that allows borrowers to apply for loans with a co-signer.

* Implement a referral program that rewards borrowers and investors for referring new users to the platform.

* Implement a secondary market feature that allows investors to sell their investment to other investors.

* Use machine learning to analyze borrower data and predict their likelihood of defaulting on a loan.

* Offer borrowers the ability to apply for loans in different currencies.

* Implement a mobile app to allow borrowers and investors to manage their accounts on-the-go.
Expand the platform to include personal loans and credit lines.

* Partner with credit bureaus and financial institutions to expand the range of financial data available for credit analysis.

* Develop a credit scoring system to help borrowers improve their creditworthiness and increase their chances of being approved for loans.

## Contributing

We welcome contributions from the community. To contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your changes.
- Make your changes and commit them.
- Push your changes to your fork.
- Create a pull request.

Please follow our code standards and ensure that all tests pass before submitting a pull request.

## Copyright © 2023 Shraddha Rao

*All content in this project, including but not limited to text, images, code, and documentation, is the property of the project owners and contributors. Any form of plagiarism, including copying or reproducing any part of this project without proper attribution, is strictly prohibited and may result in legal action. We respect the intellectual property rights of others and expect the same from anyone who uses or contributes to this project.*


