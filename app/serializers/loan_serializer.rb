class LoanSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :amount, :interest_rate, :term_length, :status
  has_one :borrower_id
end
