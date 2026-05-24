class Payment < ApplicationRecord
  belongs_to :loan
  belongs_to :payer, class_name: "User"

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :scheduled_date, presence: true
  validates :status, inclusion: { in: %w[scheduled paid overdue] }

  scope :paid, -> { where(status: "paid") }
  scope :overdue, -> { where("status = 'scheduled' AND scheduled_date < ?", Date.today) }
end
