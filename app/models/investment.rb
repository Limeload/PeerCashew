class Investment < ApplicationRecord
  belongs_to :lender, class_name: "User"
  belongs_to :loan
  has_many :payments
end
