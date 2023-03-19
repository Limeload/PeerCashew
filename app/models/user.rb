class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :address, presence: true
  validates :password, length: {minimum:6, maximum:15}
  validates :password, confirmation: true

  has_many :loans, foreign_key: "borrower_id"
  has_many :investments, foreign_key: "lender_id"
  has_many :loans, through: :investments
  # has_one_attached :profile_picture
end
