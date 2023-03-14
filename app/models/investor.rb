class Investor < ApplicationRecord
  belongs_to :user
  belongs_to :loan

  validates :investment_amount, presence: true, numericality: { greater_than: 0 }
  validates :interest_rate, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
