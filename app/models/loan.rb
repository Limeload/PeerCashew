class Loan < ApplicationRecord
  belongs_to :borrower, class_name: "User"

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :interest_rate, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :term_length, presence: true, numericality: { greater_than: 0 }
  validates :status, inclusion: { in: %w[pending funded active repaid defaulted] }

  has_many :investors
  has_many :lenders, through: :investors, source: :lender
  has_many :payments

  TRANSITIONS = {
    "pending"   => %w[funded defaulted],
    "funded"    => %w[active defaulted],
    "active"    => %w[repaid defaulted],
    "repaid"    => [],
    "defaulted" => []
  }.freeze

  def can_transition_to?(new_status)
    TRANSITIONS.fetch(status, []).include?(new_status)
  end

  def transition_to!(new_status)
    raise ActiveRecord::RecordInvalid.new(self) unless can_transition_to?(new_status)
    update!(status: new_status)
  end
end
