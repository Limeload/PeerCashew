class LoanSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :amount, :interest_rate, :duration, :status
  has_one :borrower_id
end
