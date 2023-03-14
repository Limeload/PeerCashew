class Loan < ApplicationRecord
  belongs_to :borrower, class_name: "User"

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :interest_rate, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :term_length, presence: true, numericality: { greater_than: 0 }

  has_many :investments
  has_many :investors, through: :investments
  has_many :lenders, through: :investors, source: :user
end
