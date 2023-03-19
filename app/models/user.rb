class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :address, presence: true

  has_many :borrower_loans, class_name: "Loan", foreign_key: "borrower_id"
  has_many :investments, foreign_key: "investor_id"
  has_many :lender_loans, through: :investments, source: :loan
  # has_one_attached :profile_picture
end
