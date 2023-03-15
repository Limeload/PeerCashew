# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding users'

user1 = User.create(email: 'shraddharaom@gmail.com', password: 'shraddha1234', name: 'Shraddha Rao', date_of_birth: '08-27-1995', address: '555 Madision Street, Chicago, IL 60661')
user2 = User.create(email: 'julia.lee@example.com', password: 'uW8p#n3Kx!', name: 'Julia Lee', date_of_birth: '12-10-1992', address: '123 Main Street, Anytown, USA')
user3 = User.create(email: 'david.kim@example.com', password: 'H3lloW0rld!', name: 'David Kim', date_of_birth:'06-25-1985', address: '456 Oak Avenue, Somewhere, USA')
user4 = User.create(email: 'samantha.taylor@example.com', password: 'P@55w0rd123', name: 'Samantha Taylor', date_of_birth: '09-01-1998', address: '456 Maple Avenue, Anyplace, USA')
user5 = User.create(email: 'ethan.johnson@example.com', password: 'bR@v0c0d3', name: 'Ethan Johnson', date_of_birth: '02-14-1990', address: '789 Elm Street, Anywhere, USA')
user6 = User.create(email: 'lily.chen@example.com', password: 'Qwerty123!', name: 'Lily Chen', date_of_birth: '11-30-1995', address: '321 Maple Drive, Anyplace, USA')
user7 = User.create(email: 'michael.davis@example.com', password: 'Passw0rd!', name: 'Michael Davis', date_of_birth: '04-16-1983', address: '567 Pine Street, Nowhere, USA')
user8 = User.create(email: 'ashley.brown@example.com', password: '2BorNot2B?', name: 'Ashley Brown', date_of_birth: '08-07-1993', address: '234 Cedar Lane, Anytown, USA')
user9 = User.create(email: 'william.wilson@example.com', password: 'W1ll@rd123', name: 'William Wilson', date_of_birth: '01-05-1987', address: '890 Oak Street, Anywhere, USA')
user10 = User.create(email: 'jessica.martinez@example.com', password: 'J3ss1c@M!', name: 'Jessica Martinez', date_of_birth: '07-20-1997', address: '123 Elm Street, Nowhere, USA')

puts 'Seeding loans'

loan1 = Loan.create(borrower: user1, title: 'Car Loan', description: 'This loan is intended to finance the purchase of a new or used car.', amount: 25000, interest_rate: 4.50, term_length: 12, status: 'Approved')
loan2 = Loan.create(borrower: user2, title: 'Personal Loan', description: 'This loan is intended to cover unexpected expenses such as medical bills, home repairs, or travel.', amount: 10000, interest_rate: 6.00, term_length: 24, status: 'Rejected')
loan3 = Loan.create(borrower: user3, title: 'Business Loan', description: 'This loan is intended to finance a new business or expand an existing one.', amount: 50000, interest_rate: 7.50, term_length: 60, status: 'Pending')
loan4 = Loan.create(borrower: user4, title: 'Student Loan', description: 'This loan is intended to finance higher education expenses such as tuition, fees, and books.', amount: 30000, interest_rate: 3.50, term_length: 96, status: 'Approved')
loan5 = Loan.create(borrower: user5, title: 'Vacation Loan', description: 'This loan is intended to finance a dream vacation or travel experience.', amount: 5000, interest_rate: 8.00, term_length: 12, status: 'Rejected')
loan6 = Loan.create(borrower: user6, title: 'Debt Consolidation Loan', description: 'This loan is intended to consolidate multiple debts into a single payment with a lower interest rate.', amount: 20000, interest_rate: 5.50, term_length: 36, status: 'Pending')
loan7 = Loan.create(borrower: user7, title: 'Medical Loan', description: 'This loan is intended to finance medical procedures or treatments not covered by insurance.', amount: 15000, interest_rate: 6.50, term_length: 24, status: 'Approved')
loan8 = Loan.create(borrower: user8, title: 'Home Equity Loan', description: 'This loan is intended to allow homeowners to borrow against the equity in their homes for major expenses such as home improvements, debt consolidation, or education.', amount: 75000, interest_rate: 4.75, term_length: 120, status: 'Pending')
loan9 = Loan.create(borrower: user9, title: 'Wedding Loan', description: 'This loan is intended to finance a dream wedding or special event.', amount: 7500, interest_rate: 7.00, term_length: 18, status: 'Rejected')
loan10 = Loan.create(borrower: user10, title: 'Green Loan', description: 'This loan is intended to finance eco-friendly home improvements such as solar panels, energy-efficient appliances, or green roofs.', amount: 12000, interest_rate: 6.75, term_length: 36, status: 'Pending')

puts 'Seeding investors'

investor1 = Investor.create(user: user10, loan: loan10, investment_amount: 1000, interest_rate: 4.00, status: 'Active')
investor2 = Investor.create(user: user9, loan: loan9, investment_amount: 5000, interest_rate: 6.50, status: 'Pending')
investor3 = Investor.create(user: user8, loan: loan8, investment_amount: 3500, interest_rate: 4.50, status: 'Closed')




