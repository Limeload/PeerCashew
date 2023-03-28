class Investor < ApplicationRecord
  belongs_to :lender, class_name: "User"
  belongs_to :loan

  validates :investment_amount, presence: true, numericality: { greater_than: 0 }
  validates :interest_rate, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :status, presence: true
end
