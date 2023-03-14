class Loan < ApplicationRecord
  belongs_to :borrower, class_name: "User"
  has_many :payments
end
