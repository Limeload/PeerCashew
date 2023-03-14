class User < ApplicationRecord
  has_many :loans, foreign_key: "borrower_id"
  has_many :investments, foreign_key: "lender_id"

  validates :email, uniqueness: true
end
